import storeAPI from '../../api/storeAPI';
import { setItemToLocalStorage } from '../../lib/storage';
import { StoreInputsType } from '../../types/store';

const isEssentialInputsFilled = (data: StoreInputsType) => {
  const { storeId, name, branchName, password, passwordConfirm } = data;

  return [storeId, name, branchName, password, passwordConfirm].reduce(
    (prev, value) => {
      return !!value;
    },
    true,
  );
};

const isPasswordCorrect = (data: StoreInputsType) => {
  const { password, passwordConfirm } = data;

  return password === passwordConfirm;
};

export const handleRegister = async (data: StoreInputsType) => {
  if (!(isPasswordCorrect(data) && isEssentialInputsFilled(data))) {
    throw new Error('올바른 값을 입력해주세요.');
  }

  const { passwordConfirm, ...values } = data;

  const response = await storeAPI.register(values);
  setItemToLocalStorage('storeId', String(response.id));

  return response;
};

export const handleLogin = async (data: StoreInputsType) => {
  const { branchName, name, passwordConfirm, ...values } = data;

  const response = await storeAPI.login(values);
  setItemToLocalStorage('storeId', String(response.id));

  return response;
};
