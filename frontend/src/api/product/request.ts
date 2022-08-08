import client from '../client';

interface addProductType {
  name: string;
  categoryId: string;
  price: string;
  productOption: any;
}

export async function getProductByCategoryId(id: string) {
  const { data } = await client.get(`/product?categoryId=${id}`);

  return data;
}

export async function addProduct(product: addProductType) {
  const { data } = await client.post(`/product`, product);

  return data;
}
