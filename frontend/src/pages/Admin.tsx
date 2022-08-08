import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import withCheckPermission from '../components/HOC/withCheckPermission';
import { storeContext } from '../context/StoreProvider';
import { useNavigate } from '../lib/Router';
import { setItemToLocalStorage } from '../lib/storage';

function Admin() {
  const { store } = useContext(storeContext);
  const navigate = useNavigate();

  const onLogout = () => {
    setItemToLocalStorage('storeId', '');
    navigate('/');
  };

  return (
    <Header>
      <h1>안녕하세요 사장님.</h1>
      <h2>
        {store.name} {store.branchName}점입니다.
      </h2>
      <button type="button" onClick={onLogout}>
        로그아웃
      </button>
    </Header>
  );
}

export default withCheckPermission(Admin);
