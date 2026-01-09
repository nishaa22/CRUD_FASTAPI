import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-80 m-2 hover:shadow-xl transition-shadow">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{product.name}</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-2">{product.description}</p>

      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-900 dark:text-white font-semibold">₹{product.price}</span>
        <span className="text-gray-600 dark:text-gray-300">Qty: {product.quantity}</span>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onEdit(product)}
          className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product)}
          className="cursor-pointer px-3 py-1 bg-red-600 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
