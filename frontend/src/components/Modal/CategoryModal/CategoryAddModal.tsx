import React from 'react';
import { CategoryType } from '../../../types/category';
import categoryAPI from '../../../api/categoryAPI';

interface CategoryAddModalProps {
  storeId: number;
  closeModal: () => void;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}

function CategoryAddModal({
  storeId,
  closeModal,
  setCategories,
}: CategoryAddModalProps) {
  const handleAddCategory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { categoryName } = event.target as HTMLFormElement;
    const category = {
      name: categoryName.value,
      storeId,
    };

    const response = await categoryAPI.addCategory(category);

    closeModal();
    setCategories((prev) => [...prev, { ...category, id: response }]);
  };

  return (
    <form onSubmit={handleAddCategory}>
      <strong>추가할 카테고리 이름을 입력해주세요.</strong>
      <input type="text" name="categoryName" autoFocus autoComplete="off" />
      <button type="submit">추가</button>
    </form>
  );
}

export default CategoryAddModal;
