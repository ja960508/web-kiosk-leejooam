import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useNavigate } from '../../lib/Router';
import { getItemFromLocalStorage } from '../../lib/storage';
import { AuthForm } from './Entrance.style';
import { useAuthForm } from './hooks';

function Entrance() {
  const [isRegister, setIsRegister] = useState(false);
  const { data, handleChange, onAuthSubmit } = useAuthForm({
    isRegister,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storeId = getItemFromLocalStorage('storeId');

    if (storeId) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
      <Header>
        <h1>안녕하세요 사장님.</h1>
        <h2>가게 로그인을 진행해주세요.</h2>
      </Header>
      <AuthForm onSubmit={onAuthSubmit}>
        <label htmlFor="storeId">가게 아이디</label>
        <input
          name="storeId"
          type="text"
          autoComplete="off"
          value={data.storeId}
          onChange={handleChange('storeId')}
          placeholder="가게 id를 입력해주세요."
        />
        {isRegister && (
          <>
            <label htmlFor="storeId">가게 이름</label>
            <input
              name="name"
              type="text"
              autoComplete="off"
              value={data.name}
              onChange={handleChange('name')}
              placeholder="매장명을 입력해주세요."
            />
            <label htmlFor="storeId">점포명</label>
            <input
              name="branchName"
              type="text"
              autoComplete="off"
              value={data.branchName}
              onChange={handleChange('branchName')}
              placeholder="점표명을 입력해주세요."
            />
          </>
        )}
        <label htmlFor="storeId">비밀번호</label>
        <input
          name="password"
          type="password"
          autoComplete="off"
          value={data.password}
          onChange={handleChange('password')}
          placeholder="비밀번호를 입력해주세요."
        />
        {isRegister && (
          <>
            <label htmlFor="storeId">비밀번호 확인</label>
            <input
              name="passwordConfirm"
              type="password"
              autoComplete="off"
              value={data.passwordConfirm}
              onChange={handleChange('passwordConfirm')}
              placeholder="비밀번호를 확인해주세요."
            />
          </>
        )}
        <button type="submit" className="submit-btn">
          {isRegister ? '회원가입' : '로그인'}
        </button>
        <div className="auth-type-selector">
          <button type="button" onClick={() => setIsRegister(false)}>
            로그인
          </button>
          <div className="divider">|</div>
          <button type="button" onClick={() => setIsRegister(true)}>
            회원가입
          </button>
        </div>
      </AuthForm>
    </>
  );
}

export default Entrance;
