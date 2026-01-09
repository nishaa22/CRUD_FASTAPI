from fastapi import Depends, HTTPException, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import Product
from database import session, engine
import database_model
from sqlalchemy.orm import Session

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],    # allow DELETE, GET, POST, etc.
    allow_headers=["*"],
)

# this is used to create the table of all the datamodels defined in datamodel file
database_model.Base.metadata.create_all(bind=engine)


# homepage url
@app.get("/")
def greet():
    return "Welcome to our first FAST API code"


# dummy data for products
products = [
    Product(id=1, name="phone", description="budget phone",
            price=194.56, quantity=10),
    Product(id=2, name="laptop", description="gaming laptop",
            price=1200.45, quantity=5),
    Product(id=3, name="headphones", description="wireless headphones",
            price=99.22, quantity=25),
    Product(id=4, name="smartwatch", description="fitness smartwatch",
            price=149.99, quantity=15),
    Product(id=5, name="tablet", description="10 inch android tablet",
            price=299.90, quantity=8),
]


# creating db connection and closing it after every use
def get_db():
    db = session()
    try:
        yield db
    finally:
        db.close()


# inserting dummy data inside the database on first load
def init_db():
    db = session()
    # count the data in DB product table
    count = db.query(database_model.Product).count()
    print(count)
    if count == 0:
        for product in products:
            db.add(database_model.Product(**product.model_dump()))
        db.commit()


init_db()


# url to fetch products
@app.get("/products")
def get_all_products(db: Session = Depends(get_db)):  # dependency injection
    # query to fetch all db data from Product table
    db_products = db.query(database_model.Product).all()
    return db_products


# url to fetch product by id
@app.get("/products/{id}")
def get_product_by_id(id: int, db: Session = Depends(get_db)):
    db_product = db.query(database_model.Product).filter(
        database_model.Product.id == id).first()
    if db_product:
        return db_product
    else:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )


# url to add a new product inside the product table
@app.post("/products")
def add_product(product: Product, db: Session = Depends(get_db)):
    db.add(database_model.Product(**product.model_dump()))
    db.commit()
    return "Product added successfully"


# url to update a product using an id
@app.put("/products/{id}")
def update_product(id: int, product: Product, db: Session = Depends(get_db)):
    db_product = db.query(database_model.Product).filter(
        database_model.Product.id == id).first()
    if db_product:
        db_product.name = product.name
        db_product.description = product.description
        db_product.price = product.price
        db_product.quantity = product.quantity
        db.commit()
        return "Product updated successfully"
    else:
        return "No product found"


# url to delete a product by id
@app.delete("/products/{id}")
def delete_product_by_id(id: int, db: Session = Depends(get_db)):
    db_product = db.query(database_model.Product).filter(
        database_model.Product.id == id).first()
    if db_product:
        db.delete(db_product)
        db.commit()
        return "Product deleted successfully"
    else:
        return "No product found"
