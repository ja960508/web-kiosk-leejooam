import { CategoryAddType, CategoryType } from '../types/category';
import client from './client';

async function getCategoryById(id: number): Promise<CategoryType[]> {
  const { data } = await client.get(`/category?storeId=${id}`);

  return data;
}

async function addCategory(category: CategoryAddType) {
  const { data } = await client.post(`/category`, category);

  return data;
}

async function deleteCategoryById(id: number) {
  const { data } = await client.delete(`/category/${id}`);

  return data;
}

export default {
  getCategoryById,
  addCategory,
  deleteCategoryById,
};
