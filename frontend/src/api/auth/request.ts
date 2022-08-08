import client from '../client';

interface storeLoginType {
  storeId: string;
  password: string;
}

interface storeRegisterType {
  storeId: string;
  password: string;
  branchName: string;
}

interface storeType {
  id: string;
  storeId: string;
  name: string;
  branchName: string;
}

export async function login(store: storeLoginType): Promise<storeType> {
  const { data } = await client.post('/store/login', store);

  return data;
}

export async function register(store: storeRegisterType): Promise<storeType> {
  const { data } = await client.post('/store/register', store);

  return data;
}

export async function getStoreInfo(id: string): Promise<storeType> {
  const { data } = await client.get(`/store/${Number(id)}`);

  return data;
}
