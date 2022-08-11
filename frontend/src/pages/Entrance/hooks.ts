import { useContext } from 'react';
import { storeContext } from '../../context/StoreProvider';
import { useTextInputs } from '../../hooks';
import { useNavigate } from '../../lib/Router';
import { initialStoreInputsValue, StoreInputsType } from '../../types/store';
import { handleLogin, handleRegister } from './auth.handler';

interface Props {
  isRegister: boolean;
}

export const useAuthForm = ({ isRegister }: Props) => {
  const navigate = useNavigate();
  const { changeStoreInfo } = useContext(storeContext);
  const { data, handleChange, resetInput } = useTextInputs<StoreInputsType>({
    initialValue: initialStoreInputsValue,
  });

  const onAuthSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isRegister) {
      const store = await handleRegister(data);
      changeStoreInfo(store);
      return;
    }

    const store = await handleLogin(data);
    changeStoreInfo(store);
    navigate('/admin');
  };

  return { data, handleChange, resetInput, onAuthSubmit };
};
