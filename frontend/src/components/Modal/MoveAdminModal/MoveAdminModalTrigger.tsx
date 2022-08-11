import React from 'react';
import { ManagementIcon } from '../../../assets/icons';
import { LinkButton } from '../../../styles/commons/LinkButton';
import { useModal } from '../hooks';
import Modal from '../Modal';
import MoveAdminModal from './MoveAdminModal';

function MoveAdminModalTrigger() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <LinkButton type="button" onClick={openModal}>
        <ManagementIcon />
        매장관리
      </LinkButton>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <MoveAdminModal />
      </Modal>
    </>
  );
}

export default MoveAdminModalTrigger;
