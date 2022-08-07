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

export async function login(store: storeLoginType): Promise<string> {
  const { data } = await client.post('/store/login', store);

  return data;
}

export async function register(store: storeRegisterType): Promise<string> {
  const { data } = await client.post('/store/register', store);

  return data;
}
