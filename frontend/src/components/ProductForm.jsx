import { useEffect, useState } from "react";
import InputField from "./InputField";
import { addProduct, getAllProducts, updateProduct } from "../utils/product";

const ProductForm = ({ setAllProducts, isEdit, setIsEdit, productToBeUpdated }) => {
  const [product, setProduct] = useState({
    id: Math.floor(Math.random() * 100),
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (isEdit && productToBeUpdated) {
      setProduct(productToBeUpdated);
    }
  }, [isEdit, productToBeUpdated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = isEdit ? await updateProduct(productToBeUpdated.id, product) : await addProduct(product)
    if (res.status == 200) {
      const data = await getAllProducts()
      setAllProducts(data)
      setProduct({
        id: Math.floor(Math.random() * 100),
        name: "",
        description: "",
        price: "",
        quantity: "",
      })
      setIsEdit(false)
    }
  }

  return (
    <form className="bg-white flex flex-col w-[50%] mt-10 border border-gray-200 p-10 rounded-xl shadow-lg" onSubmit={(e) => handleSubmit(e)} method="post">
      <InputField
        label="Product ID"
        name="id"
        value={product.id}
        placeholder="Enter product id"
        onChange={handleChange}
        readOnly={true}
      />

      <InputField
        label="Name"
        name="name"
        value={product.name}
        placeholder="Enter the name"
        onChange={handleChange}
      />

      <InputField
        label="Description"
        name="description"
        value={product.description}
        placeholder="Enter the description"
        onChange={handleChange}
      />

      <InputField
        label="Price"
        name="price"
        type="number"
        value={product.price}
        placeholder="Enter the price"
        onChange={handleChange}
      />

      <InputField
        label="Quantity"
        name="quantity"
        type="number"
        value={product.quantity}
        placeholder="Enter the quantity"
        onChange={handleChange}
      />

      <button className="mt-5 bg-green-600 text-white rounded-lg p-2 cursor-pointer" type="submit">{isEdit ? "Update Product" : "Add Product"}</button>
    </form>
  );
};

export default ProductForm;
