import React, { useState } from 'react';
import { PrimaryButton } from '../../../../styles/commons/PrimaryButton';
import { useModal } from '../../hooks';
import Modal from '../../Modal';
import CashModal from '../Cash/CashModal';
import CreditCardLoadingModal from '../CreditCard/CreditCardLoadingModal';
import ReceiptModal from '../Receipt/ReceiptModal';
import PaymentSelectModal from './PaymentSelectModal';

function PaymentSelectModalTrigger() {
  const paymentSelect = useModal();
  const cardLoading = useModal();
  const cash = useModal();
  const receipt = useModal();
  const [paymentInfo, setPaymentInfo] = useState({
    paymentMethod: '',
    inputAmount: 0,
  });

  const openReceiptModal = (paymentMethod: string, inputAmount = 0) => {
    receipt.openModal();
    setPaymentInfo({ paymentMethod, inputAmount });
  };

  return (
    <>
      <PrimaryButton type="button" onClick={paymentSelect.openModal}>
        결제하기
      </PrimaryButton>
      <Modal
        isModalOpen={paymentSelect.isModalOpen}
        closeModal={paymentSelect.closeModal}
      >
        <PaymentSelectModal
          closeModal={paymentSelect.closeModal}
          openCashModal={cash.openModal}
          openCardLoading={cardLoading.openModal}
        />
      </Modal>
      <Modal
        isModalOpen={cardLoading.isModalOpen}
        closeModal={cardLoading.closeModal}
      >
        <CreditCardLoadingModal
          closeModal={cardLoading.closeModal}
          openReceiptModal={openReceiptModal}
        />
      </Modal>
      <Modal isModalOpen={cash.isModalOpen} closeModal={cash.closeModal}>
        <CashModal
          closeModal={cash.closeModal}
          openReceiptModal={openReceiptModal}
        />
      </Modal>
      <Modal isModalOpen={receipt.isModalOpen} closeModal={receipt.closeModal}>
        <ReceiptModal paymentInfo={paymentInfo} />
      </Modal>
    </>
  );
}

export default PaymentSelectModalTrigger;
