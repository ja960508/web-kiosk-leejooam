import React, { useContext } from 'react';
import { storeContext } from '../../../context/StoreProvider';
import { CategoryType } from '../../../types/category';
import AddCategoryModal from './AddCategoryModal';
import DeleteCategoryModal from './DeleteCategoryModal';

export interface CategoryModalProps {
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  modalType: string;
  targetCategory?: CategoryType;
}

export interface ModalProps {
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  storeId: string;
  targetCategory?: CategoryType;
}

function modalMapper(modalType: string) {
  switch (modalType) {
    case 'add':
      return AddCategoryModal;
    case 'delete':
      return DeleteCategoryModal;
    default:
      return function Default() {
        return (
          <form>
            <strong>잘못된 경로입니다.</strong>
          </form>
        );
      };
  }
}

function CategoryModal({
  setOnModal,
  setCategory,
  modalType,
  targetCategory,
}: CategoryModalProps) {
  const { store } = useContext(storeContext);
  const Modal = modalMapper(modalType);

  return (
    <Modal
      setOnModal={setOnModal}
      setCategory={setCategory}
      storeId={store.id}
      targetCategory={targetCategory}
    />
  );
}

export default CategoryModal;
