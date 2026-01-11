import { useEffect, useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import { getAllProducts, getProductById } from './utils/product';
import ProductList from './components/ProductList';
import Search from './components/Search';

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [productToBeUpdated, setProductToBeUpdated] = useState({})
  const [searchId, setSearchId] = useState()
  const [filteredProduct, setFilteredProduct] = useState()
  const [notFound, setNotFound] = useState(false);
  const productsToShow = searchId ? filteredProduct : allProducts;

  useEffect(() => {
    if (!searchId) {
      setFilteredProduct([]);
      setNotFound(false);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        const res = await getProductById(searchId);
        setFilteredProduct([res.data])
        setNotFound(false);
      } catch (error) {
        setFilteredProduct([]);
        setNotFound(true);
        console.error(error);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchId]);

  useEffect(() => {
    (async () => {
      const data = await getAllProducts()
      setAllProducts(data)
      console.log(data)
    })();
  }, [])

  console.log(filteredProduct, allProducts)

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-green-200 to-pink-200 py-10">
        <h1 className='text-4xl font-bold'>Full-Stack CRUD Application – React, FastAPI & PostgreSQL</h1>
        <ProductForm setAllProducts={setAllProducts} isEdit={isEdit} productToBeUpdated={productToBeUpdated} setIsEdit={setIsEdit} />


        {productsToShow.length > 0 && !notFound &&
          <>
            <Search setSearchId={setSearchId} searchId={searchId} />
            {notFound && (
              <p className="mt-5 text-red-600 font-semibold">
                No product found with this ID
              </p>
            )}
            <ProductList allProducts={productsToShow} setAllProducts={setAllProducts} setIsEdit={setIsEdit} setProductToBeUpdated={setProductToBeUpdated} />
          </>
        }
      </div>
    </>
  )
}

export default App
