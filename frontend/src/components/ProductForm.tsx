
import { useState } from 'react';
import type { Product } from '../types/product';

const ProductForm = () => {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    price: 0.0,
    quantity: 0
  })

  return (
    <form>
    </form>
  )
}

export default ProductForm