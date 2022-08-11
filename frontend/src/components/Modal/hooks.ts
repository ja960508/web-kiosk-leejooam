import { useState } from 'react';

export interface openModalType<T> {
  type: string;
  targetValue?: T;
}

type eventType =
  | React.MouseEvent<HTMLElement, MouseEvent>
  | React.FormEvent<HTMLFormElement>;

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event: eventType) => {
    event.stopPropagation();

    setIsModalOpen(() => true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
}
