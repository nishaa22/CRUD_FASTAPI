import { useEffect, useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import { getAllProducts } from './utils/product';
import ProductList from './components/ProductList';

function App() {
  const [allProducts, setAllProducts] = useState([])
  useEffect(() => {
    (async () => {
      const data = await getAllProducts()
      setAllProducts(data)
      console.log(data)
    })();
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-green-200 to-pink-200 py-10">
        <h1 className='text-4xl font-bold'>Full-Stack CRUD Application – React, FastAPI & PostgreSQL</h1>
        <ProductForm setAllProducts={setAllProducts} />
        {allProducts &&
          <ProductList allProducts={allProducts && allProducts} setAllProducts={setAllProducts} />}
      </div>
    </>
  )
}

export default App
