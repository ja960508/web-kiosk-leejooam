import React from 'react';
import { useModal } from '../hooks';
import Modal from '../Modal';
import PaymentSelectModal from './PaymentSelectModal';

function PaymentSelectModalTrigger() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal}>
        결제하기
      </button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <PaymentSelectModal />
      </Modal>
    </>
  );
}

export default PaymentSelectModalTrigger;
