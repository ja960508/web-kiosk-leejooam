import client from './client';

interface addProductType {
  name: string;
  categoryId: number;
  price: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productOption: any;
}

export async function getProductByCategoryId(id: number) {
  const { data } = await client.get(`/product?categoryId=${id}`);

  return data;
}

export async function addProduct(product: addProductType) {
  const { data } = await client.post(`/product`, product);

  return data;
}

export async function deleteProductById(id: number) {
  const { data } = await client.delete(`/product/${id}`);

  return data;
}

export default {
  getProductByCategoryId,
  addProduct,
  deleteProductById,
};
