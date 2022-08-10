import client from './client';

interface addProductType {
  name: string;
  categoryId: number;
  price: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productOption: any;
}

async function getProductsByCategoryId(id: number) {
  const { data } = await client.get(`/product?categoryId=${id}`);

  return data;
}

async function addProduct(product: addProductType) {
  const { data } = await client.post(`/product`, product);

  return data;
}

async function deleteProductById(id: number) {
  const { data } = await client.delete(`/product/${id}`);

  return data;
}

export default {
  getProductsByCategoryId,
  addProduct,
  deleteProductById,
};
