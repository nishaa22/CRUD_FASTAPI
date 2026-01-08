import './App.css'
import ProductForm from './components/ProductForm'

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-green-200 to-pink-200">
        <h1 className='text-2xl font-bold'>Full-Stack CRUD Application – React, FastAPI & PostgreSQL</h1>
        <ProductForm />
      </div>
    </>
  )
}

export default App
