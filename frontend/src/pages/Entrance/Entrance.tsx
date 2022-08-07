import React, { useEffect, useState } from 'react';
import { useNavigate } from '../../lib/Router';
import { getItemFromLocalStorage } from '../../lib/storage';
import { handleLogin, handleRegister } from './auth.handler';
import { AuthForm, EntranceHeader } from './Entrance.style';

function Entrance() {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const onAuthSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isRegister) {
      await handleRegister(event);
      return;
    }

    await handleLogin(event);
    navigate('/admin');
  };

  useEffect(() => {
    const storeId = getItemFromLocalStorage('storeId');

    if (storeId) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
      <EntranceHeader>
        <h1>안녕하세요 사장님.</h1>
        <h2>가게 로그인을 진행해주세요.</h2>
      </EntranceHeader>
      <AuthForm onSubmit={onAuthSubmit}>
        <input
          name="storeId"
          type="text"
          autoComplete="off"
          placeholder="가게 id를 입력해주세요."
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
          placeholder="비밀번호를 입력해주세요."
        />
        {isRegister && (
          <input
            name="passwordConfirm"
            type="password"
            autoComplete="off"
            placeholder="비밀번호를 확인해주세요."
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
