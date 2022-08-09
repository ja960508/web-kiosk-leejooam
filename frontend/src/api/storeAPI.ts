import { StoreLoginType, StoreRegisterType, StoreType } from '../types/store';
import client from './client';

export async function login(store: StoreLoginType): Promise<StoreType> {
  const { data } = await client.post('/store/login', store);

  return data;
}

export async function register(store: StoreRegisterType): Promise<StoreType> {
  const { data } = await client.post('/store/register', store);

  return data;
}

export async function getStoreInfo(id: number): Promise<StoreType> {
  const { data } = await client.get(`/store/${id}`);

  return data;
}

export default {
  login,
  register,
  getStoreInfo,
};
