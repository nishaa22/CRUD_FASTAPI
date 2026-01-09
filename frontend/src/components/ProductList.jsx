import React from "react";
import ProductCard from "./ProductCard";
import { deleteProduct, getAllProducts } from "../utils/product";

const ProductList = ({ allProducts, setAllProducts }) => {
  const handleEdit = (product) => {
    alert(`Edit product: ${product.name}`);
  };

  const handleDelete = async (product) => {
    const res = await deleteProduct(product.id)
    if (res.status == 200) {
      const data = await getAllProducts()
      setAllProducts(data)
      alert(`Delete product: ${product.name}`);
    }
  };

  return (
    <div className="flex flex-wrap justify-center mt-10 px-10">
      {allProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
