import React, { useContext, useEffect } from 'react';
import { loadingContext } from '../../../../context/LoadingProvider';

interface Props {
  closeModal: () => void;
  openReceiptModal: () => void;
}

function CreditCardLoadingModal({ closeModal, openReceiptModal }: Props) {
  const { changeIsLoading } = useContext(loadingContext);

  setTimeout(() => {
    changeIsLoading(false);
    openReceiptModal();
    closeModal();
  }, 1000);

  useEffect(() => {
    changeIsLoading(true);
  }, [changeIsLoading]);

  return <div>감사합니다 고객님</div>;
}

export default CreditCardLoadingModal;
