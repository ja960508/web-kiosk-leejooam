import React from 'react';
import { useModal } from '../hooks';
import Modal from '../Modal';
import MoveAdminModal from './MoveAdminModal';

function MoveAdminModalTrigger() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal}>
        매장관리
      </button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <MoveAdminModal />
      </Modal>
    </>
  );
}

export default MoveAdminModalTrigger;
