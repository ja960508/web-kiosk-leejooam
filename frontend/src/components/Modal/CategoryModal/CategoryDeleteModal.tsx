import React from 'react';
import categoryAPI from '../../../api/categoryAPI';
import { CategoryType } from '../../../types/category';

interface Props {
  category: CategoryType;
  closeModal: () => void;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}

function CategoryDeleteModal({ category, closeModal, setCategories }: Props) {
  const handleDeleteCategory = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await categoryAPI.deleteCategoryById(category.id);
    closeModal();
    setCategories((prev) => prev.filter((item) => item.id !== category.id));
  };

  const stopPropagation = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <form onSubmit={handleDeleteCategory} onClick={stopPropagation}>
      <strong>해당 카테고리를 삭제하시겠습니까?</strong>
      <button type="submit">삭제</button>
    </form>
  );
}

export default CategoryDeleteModal;
