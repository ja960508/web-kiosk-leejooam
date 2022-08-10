import { useState } from 'react';

export interface openModalType<T> {
  type: string;
  targetValue?: T;
}

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
}
