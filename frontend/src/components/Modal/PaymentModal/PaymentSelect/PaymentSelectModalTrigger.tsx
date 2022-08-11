import React from 'react';
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

  return (
    <>
      <button type="button" onClick={paymentSelect.openModal}>
        결제하기
      </button>
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
          openReceiptModal={receipt.openModal}
        />
      </Modal>
      <Modal isModalOpen={cash.isModalOpen} closeModal={cash.closeModal}>
        <CashModal
          closeModal={cash.closeModal}
          openReceiptModal={receipt.openModal}
        />
      </Modal>
      <Modal isModalOpen={receipt.isModalOpen} closeModal={receipt.closeModal}>
        <ReceiptModal />
      </Modal>
    </>
  );
}

export default PaymentSelectModalTrigger;
