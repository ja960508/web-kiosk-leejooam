import React from 'react';
import categoryAPI from '../../../api/categoryAPI';
import { StyledDeleteModalForm } from '../../../styles/commons/DeleteModalForm';
import { PrimaryButton } from '../../../styles/commons/PrimaryButton';
import { CategoryType, initialCategoryValue } from '../../../types/category';

interface Props {
  category: CategoryType;
  closeModal: () => void;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  categories: CategoryType[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
  selectedCategory: CategoryType;
}

function CategoryDeleteModal({
  category,
  closeModal,
  setCategories,
  categories,
  setSelectedCategory,
  selectedCategory,
}: Props) {
  const selectNewCategory = () => {
    if (category.id === selectedCategory.id) {
      const newCategory = categories.find((c) => c.id !== category.id);

      setSelectedCategory(newCategory || initialCategoryValue);
    }
  };

  const handleDeleteCategory = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await categoryAPI.deleteCategoryById(category.id);

    setCategories((prev) => prev.filter((item) => item.id !== category.id));
    selectNewCategory();
    closeModal();
  };

  const stopPropagation = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <StyledDeleteModalForm
      onSubmit={handleDeleteCategory}
      onClick={stopPropagation}
    >
      <strong className="modal-guide-text">{`${category.name} 카테고리를 삭제하시겠습니까?`}</strong>
      <PrimaryButton type="submit">삭제</PrimaryButton>
    </StyledDeleteModalForm>
  );
}

export default CategoryDeleteModal;
