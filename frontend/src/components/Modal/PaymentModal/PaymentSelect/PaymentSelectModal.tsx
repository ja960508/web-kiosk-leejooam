import React from 'react';
import { StyledPaymentSelectModal } from './PaymentSelect.style';

interface Props {
  closeModal: () => void;
  openCashModal: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  openCardLoading: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function PaymentSelectModal({
  closeModal,
  openCashModal,
  openCardLoading,
}: Props) {
  const selectCard = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    openCardLoading(event);
    closeModal();
  };

  const selectCash = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    openCashModal(event);
    closeModal();
  };

  return (
    <StyledPaymentSelectModal>
      <button type="button" onClick={selectCard}>
        카드
      </button>
      <button type="button" onClick={selectCash}>
        현금
      </button>
    </StyledPaymentSelectModal>
  );
}

export default PaymentSelectModal;
