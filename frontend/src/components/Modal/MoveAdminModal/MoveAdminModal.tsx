import React, { useContext } from 'react';
import { storeContext } from '../../../context/StoreProvider';
import storeAPI from '../../../api/storeAPI';
import { useNavigate } from '../../../lib/Router';
import { StyledMoveAdminModal } from './MoveAdminModal.style';
import { FormInput } from '../../../styles/commons/FormInput';
import { PrimaryButton } from '../../../styles/commons/PrimaryButton';

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
    <StyledMoveAdminModal onSubmit={handleCheckPassword}>
      <strong>매장의 비밀번호를 입력해주세요.</strong>
      <FormInput type="password" name="storePassword" autoFocus />
      <PrimaryButton type="submit">확인</PrimaryButton>
    </StyledMoveAdminModal>
  );
}

export default MoveAdminModal;
