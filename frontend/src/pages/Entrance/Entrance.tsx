import React, { useState } from 'react';
import styled from 'styled-components';
import { login, register } from '../../api/auth/request';
import { Link } from '../../lib/Router';

const LinkButton = styled(Link)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fcfcfc;
  color: #1e2222;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%), 0px 4px 20px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EntranceButton = styled(Link)`
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%), 0px 4px 20px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e2222;
`;

const EntranceButtons = styled.div`
  display: flex;
  justify-content: center;

  ${EntranceButton} {
    flex: 1 1 50%;
    max-width: 320px;
    height: 280px;
    margin-right: 3rem;
  }
`;

const EntranceHeader = styled.header`
  background: #1e2222;
  color: #fcfcfc;
  padding: 1rem;
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 720px;

  input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background-color: orange;
  }
`;

const checkAuthValidation = (values: { [key: string]: string }) => {
  console.log(values);
  return Object.keys(values).reduce((prev, key) => {
    return !!values[key];
  }, true);
};

const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
  const { storeId, name, branchName, password, passwordConfirm } =
    event.target as HTMLFormElement;
  const values = [storeId, name, branchName, password].reduce(
    (prev, item: HTMLInputElement) => {
      return { ...prev, [item.name]: item.value };
    },
    {},
  );

  if (password.value !== passwordConfirm.value) {
    return false;
  }

  if (!checkAuthValidation(values)) {
    return false;
  }

  await register(values);

  return true;
};

const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
  const { storeId, password } = event.target as HTMLFormElement;
  const values = [storeId, password].reduce((prev, item: HTMLInputElement) => {
    return { ...prev, [item.name]: item.value };
  }, {});

  const result = await login(values);

  console.log(result);
};

function Entrance() {
  const [isRegister, setIsRegister] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isRegister) {
      await handleRegister(event);
      return;
    }

    await handleLogin(event);
  };

  return (
    <>
      <EntranceHeader>
        <h1>안녕하세요 사장님.</h1>
        <h2>가게 로그인을 진행해주세요.</h2>
      </EntranceHeader>
      <AuthForm onSubmit={onSubmit}>
        <input
          name="storeId"
          type="text"
          autoComplete="off"
          placeholder="가게 id를 입력해주세요.(필수)"
        />
        {isRegister && (
          <>
            <input
              name="name"
              type="text"
              autoComplete="off"
              placeholder="매장명을 입력해주세요."
            />
            <input
              name="branchName"
              type="text"
              autoComplete="off"
              placeholder="점표명을 입력해주세요."
            />
          </>
        )}
        <input
          name="password"
          type="password"
          autoComplete="off"
          placeholder="비밀번호를 입력해주세요.(필수)"
        />
        {isRegister && (
          <input
            name="passwordConfirm"
            type="password"
            autoComplete="off"
            placeholder="비밀번호를 확인해주세요.(필수)"
          />
        )}
        <button type="submit">{isRegister ? '회원가입' : '로그인'}</button>
        <div>
          <button type="button" onClick={() => setIsRegister(false)}>
            로그인
          </button>
          <button type="button" onClick={() => setIsRegister(true)}>
            회원가입
          </button>
        </div>
      </AuthForm>
    </>
  );
}

export default Entrance;
