import React from 'react';
import { CategoryType } from '../../../types/category';
import withCheckAdmin from '../../HOC/withCheckAdmin';
import { useModal } from '../hooks';
import Modal from '../Modal';
import CategoryDeleteModal from './CategoryDeleteModal';

interface Props {
  category: CategoryType;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}

function CategoryDeleteModalTrigger({ category, setCategories }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal}>
        삭제
      </button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <CategoryDeleteModal
          category={category}
          closeModal={closeModal}
          setCategories={setCategories}
        />
      </Modal>
    </>
  );
}

export default withCheckAdmin(CategoryDeleteModalTrigger);
