import { StoreLoginType, StoreRegisterType, StoreType } from '../types/store';
import client from './client';

async function login(store: StoreLoginType): Promise<StoreType> {
  const { data } = await client.post('/store/login', store);

  return data;
}

async function register(store: StoreRegisterType): Promise<StoreType> {
  const { data } = await client.post('/store/register', store);

  return data;
}

async function getStoreInfo(id: number): Promise<StoreType> {
  const { data } = await client.get(`/store/${id}`);

  return data;
}

async function checkStorePassword(store: StoreLoginType) {
  const { data } = await client.post(`/store/checkPassword`, store);

  return data;
}

export default {
  login,
  register,
  getStoreInfo,
  checkStorePassword,
};
