import { CategoryType } from '../../types/category';
import client from '../client';

export interface categoryAddType {
  name: string;
  storeId: string;
}

export async function getCategoryById(id: string): Promise<CategoryType[]> {
  const { data } = await client.get(`/category?storeId=${id}`);

  return data;
}

export async function addCategory(category: categoryAddType) {
  const { data } = await client.post(`/category`, category);

  return data;
}

export async function deleteCategoryById(id: string) {
  const { data } = await client.delete(`/category/${id}`);

  return data;
}
