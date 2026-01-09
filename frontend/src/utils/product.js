import api from "./api";

export const getAllProducts = async () => {
  const { data } = await api.get("/products")
  return data
}

export const deleteProduct = async (id) => {
  const data = await api.delete(`/products/${id}`);
  return data
}

export const addProduct = async (product) => {
  const data = await api.post(`/products`, product);
  return data
}

export const updateProduct = async (id, product) => {
  const data = await api.put(`/products/${id}`, product);
  return data
}

export const getProductById = async (id) => {
  const data = await api.get(`/products/${id}`);
  return data
}