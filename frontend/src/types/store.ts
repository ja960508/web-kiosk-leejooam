export interface StoreLoginType {
  storeId: string;
  password: string;
}

export interface StoreRegisterType {
  storeId: string;
  name: string;
  password: string;
  branchName: string;
}

export interface StoreInputsType {
  storeId: string;
  name: string;
  password: string;
  passwordConfirm: string;
  branchName: string;
}

export interface StoreType {
  id: number;
  storeId: string;
  name: string;
  branchName: string;
}

export const initialStoreValue = {
  id: 0,
  storeId: '',
  name: '',
  branchName: '',
};

export const initialStoreInputsValue = {
  storeId: '',
  name: '',
  password: '',
  passwordConfirm: '',
  branchName: '',
};
