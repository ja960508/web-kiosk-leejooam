import React from 'react';
import { login, register } from '../../api/auth/request';
import { setItemToLocalStorage } from '../../lib/storage';

const isEssentialInputsFilled = (values: { [key: string]: string }) => {
  return Object.keys(values).reduce((prev, key) => {
    return !!values[key];
  }, true);
};

const isPasswordCorrect = (
  password: HTMLInputElement,
  passwordConfirm: HTMLInputElement,
) => {
  if (password.value !== passwordConfirm.value) {
    return false;
  }

  return true;
};

export const handleRegister = async (
  event: React.FormEvent<HTMLFormElement>,
) => {
  const { storeId, name, branchName, password, passwordConfirm } =
    event.target as HTMLFormElement;
  const values = [storeId, name, branchName, password].reduce(
    (prev, item: HTMLInputElement) => {
      return { ...prev, [item.name]: item.value };
    },
    {},
  );

  if (
    !(
      isEssentialInputsFilled(values) &&
      isPasswordCorrect(password, passwordConfirm)
    )
  ) {
    throw new Error('올바른 값을 입력해주세요.');
  }

  const response = await register(values);
  setItemToLocalStorage('storeId', response.id);

  return response;
};

export const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
  const { storeId, password } = event.target as HTMLFormElement;
  const values = [storeId, password].reduce((prev, item: HTMLInputElement) => {
    return { ...prev, [item.name]: item.value };
  }, {});

  const response = await login(values);
  setItemToLocalStorage('storeId', response.id);

  return response;
};
