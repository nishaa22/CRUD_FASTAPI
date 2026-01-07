from fastapi import FastAPI
from model import Product

app = FastAPI()

@app.get("/")
def greet():
  return "Welcome to our first FAST API code"

products = [
  Product(id=1, name="phone", description="budget phone", price=194.56, quantity=10),
  Product(id=2, name="laptop", description="gaming laptop", price=1200.45, quantity=5),
  Product(id=3, name="headphones", description="wireless headphones", price=99.22, quantity=25),
  Product(id=4, name="smartwatch", description="fitness smartwatch", price=149.99, quantity=15),
  Product(id=5, name="tablet", description="10 inch android tablet", price=299.90, quantity=8),
]

@app.get("/products")
def get_all_products():
  return products

@app.get("/product/{id}")
def get_product_by_id(id: int):
  for product in products:
    if product.id == id:
      return product

  return "Product not found"


@app.post("/product")
def add_product(product: Product):
  products.append(product)
  return product


@app.put("/product/{id}")
def update_product(id: int, product: Product):
  for i in range(len(products)):
    if products[i].id == id:
      products[i] = product
      return "Product updated successfully"
  
  return "No product found"


@app.delete("/product/{id}")
def delete_product_by_id(id: int):
  for i in range(len(products)):
    if products[i].id == id:
      del products[i]
      return "Product deleted successfully"

  return "No product found"