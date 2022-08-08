import { useState } from 'react';
import { CategoryType } from '../../types/category';

export interface openModalType {
  type: string;
  targetCategory?: CategoryType;
}

const initialCategoryValue = {
  id: '',
  name: '',
  storeId: '',
};

export const useModal = (): [
  boolean,
  string,
  React.Dispatch<React.SetStateAction<boolean>>,
  ({ type }: openModalType) => void,
  CategoryType,
] => {
  const [onModal, setOnModal] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [targetCategory, setTargetCategory] =
    useState<CategoryType>(initialCategoryValue);

  const openModal = ({
    type,
    targetCategory = initialCategoryValue,
  }: openModalType) => {
    setOnModal(true);
    setModalType(type);
    setTargetCategory(targetCategory);
  };

  return [onModal, modalType, setOnModal, openModal, targetCategory];
};
