import React from 'react';
import { ModalContent, ModalOverlay } from './Modal.style';
import ModalPortal from './ModalPortal';

interface ModalPropsType {
  isModalOpen: boolean;
  children: React.ReactNode;
  closeModal: () => void;
}

function Modal({ isModalOpen, children, closeModal }: ModalPropsType) {
  if (!isModalOpen) {
    return <></>;
  }

  return (
    <ModalPortal>
      <ModalOverlay
        onClick={(event) => {
          event.stopPropagation();
          closeModal();
        }}
      ></ModalOverlay>
      <ModalContent>{children}</ModalContent>
    </ModalPortal>
  );
}

export default Modal;
