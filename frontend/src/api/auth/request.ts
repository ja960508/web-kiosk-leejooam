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
  try {
    const res = await client.post('/store/login', store, {
      withCredentials: true,
    });

    return res;
  } catch (e) {
    console.error(e);
  }
}

export async function register(store: storeRegisterType) {
  try {
    const res = await client.post('/store/register', store);

    return res;
  } catch (e) {
    console.error(e);
  }
}
