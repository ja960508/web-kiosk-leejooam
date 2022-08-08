import React from 'react';
import { ModalContent, ModalOverlay } from './Modal.style';
import ModalPortal from './ModalPortal';

interface ModalPropsType {
  children: React.ReactNode;
  setOnModal: (prev: boolean) => void;
}

function Modal({ children, setOnModal }: ModalPropsType) {
  return (
    <ModalPortal>
      <ModalOverlay onClick={() => setOnModal(false)}></ModalOverlay>
      <ModalContent>{children}</ModalContent>
    </ModalPortal>
  );
}

export default Modal;
