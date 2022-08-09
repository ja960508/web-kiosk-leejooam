import { useState } from 'react';

export interface openModalType<T> {
  type: string;
  targetValue?: T;
}

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
}
