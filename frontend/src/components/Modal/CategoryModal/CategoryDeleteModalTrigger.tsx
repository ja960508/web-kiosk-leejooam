import React from 'react';
import { TrashCanIcon } from '../../../assets/icons';
import { CategoryType } from '../../../types/category';
import withCheckAdmin from '../../HOC/withCheckAdmin';
import { useModal } from '../hooks';
import Modal from '../Modal';
import CategoryDeleteModal from './CategoryDeleteModal';
import { StyledCategoryDeleteModal } from './CategoryDeleteModal.style';

interface Props {
  category: CategoryType;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  categories: CategoryType[];
  selectedCategory: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

function CategoryDeleteModalTrigger({
  category,
  setCategories,
  categories,
  setSelectedCategory,
  selectedCategory,
}: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <StyledCategoryDeleteModal>
      <button className="delete-btn" type="button" onClick={openModal}>
        <TrashCanIcon />
      </button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <CategoryDeleteModal
          category={category}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          closeModal={closeModal}
          setCategories={setCategories}
          selectedCategory={selectedCategory}
        />
      </Modal>
    </StyledCategoryDeleteModal>
  );
}

export default withCheckAdmin(CategoryDeleteModalTrigger);
