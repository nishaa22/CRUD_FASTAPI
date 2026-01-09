import api from "./api";

export const getAllProducts = async () => {
  const { data } = await api.get("/products")
  return data
}

export const deleteProduct = async (id) => {
  const data = await api.delete(`/product/${id}`);
  return data
}

export const addProduct = async (product) => {
  const data = await api.post(`/product`, product);
  return data
}

export const updateProduct = async (id, product) => {
  const data = await api.put(`/product/${id}`, product);
  return data
}