import client from '../client';

export interface categoryType {
  id: string;
  name: string;
  storeId: string;
  deleteAt: boolean;
}

export interface categoryAddType {
  name: string;
  storeId: string;
}

export async function getCategoryById(id: string): Promise<categoryType[]> {
  const { data } = await client.get(`/category?storeId=${id}`);

  return data;
}

export async function addCategory(category: categoryAddType) {
  const { data } = await client.post(`/category`, category);

  return data;
}
