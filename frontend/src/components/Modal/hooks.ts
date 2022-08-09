import { useState } from 'react';

export interface openModalType<T> {
  type: string;
  targetValue?: T;
}

export function useModal<T>(
  initalValue: T,
): [
  boolean,
  string,
  React.Dispatch<React.SetStateAction<boolean>>,
  ({ type }: openModalType<T>) => void,
  T,
] {
  const [onModal, setOnModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [targetValue, setTargetValue] = useState<T>(initalValue);

  const openModal = ({ type, targetValue = initalValue }: openModalType<T>) => {
    setOnModal(true);
    setModalType(type);
    setTargetValue(targetValue);
  };

  return [onModal, modalType, setOnModal, openModal, targetValue];
}
