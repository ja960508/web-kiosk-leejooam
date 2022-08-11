import React, { useContext, useEffect } from 'react';
import {
  changeLoadingContext,
  loadingContext,
} from '../../../../context/LoadingProvider';
import Loading from '../../../Loading/Loading';

interface Props {
  closeModal: () => void;
  openReceiptModal: (paymentMethod: string) => void;
}

function CreditCardLoadingModal({ closeModal, openReceiptModal }: Props) {
  const { isLoading } = useContext(loadingContext);
  const { changeIsLoading } = useContext(changeLoadingContext);

  useEffect(() => {
    setTimeout(() => {
      changeIsLoading(false);
      openReceiptModal('card');
      closeModal();
    }, 1000);

    changeIsLoading(true);
  }, [changeIsLoading, openReceiptModal, closeModal]);

  return <Loading isLoading={isLoading} />;
}

export default CreditCardLoadingModal;
