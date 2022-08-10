import React, { useContext } from 'react';
import { storeContext } from '../../../context/StoreProvider';
import storeAPI from '../../../api/storeAPI';
import { useNavigate } from '../../../lib/Router';

function MoveAdminModal() {
  const { store } = useContext(storeContext);
  const navigate = useNavigate();

  const handleCheckPassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const { storePassword } = event.target as HTMLFormElement;

    const result = await storeAPI.checkStorePassword({
      storeId: store.storeId,
      password: storePassword.value,
    });

    if (!result) {
      return;
    }

    navigate('/admin');
  };

  return (
    <form onSubmit={handleCheckPassword}>
      <strong>매장의 비밀번호를 입력해주세요.</strong>
      <input type="password" name="storePassword" />
      <button type="submit">확인</button>
    </form>
  );
}

export default MoveAdminModal;
