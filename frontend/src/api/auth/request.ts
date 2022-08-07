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

export async function login(store: storeLoginType) {
  const { data }: { data: string } = await client.post('/store/login', store, {
    withCredentials: true,
  });

  return data;
}

export async function register(store: storeRegisterType) {
  const { data }: { data: string } = await client.post(
    '/store/register',
    store,
  );

  return data;
}
