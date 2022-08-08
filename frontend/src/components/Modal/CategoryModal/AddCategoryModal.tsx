import React from 'react';
import { addCategory } from '../../../api/category/request';
import { ModalProps } from './CategoryModal';

function AddCategoryModal({ setOnModal, setCategory, storeId }: ModalProps) {
  const addNewCategory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { categoryName } = event.target as HTMLFormElement;
    const category = {
      name: categoryName.value,
      storeId,
    };

    const response = await addCategory(category);

    setOnModal(false);
    setCategory((prev) => [...prev, { ...category, id: response }]);
  };

  return (
    <form onSubmit={addNewCategory}>
      <strong>추가할 카테고리 이름을 입력해주세요.</strong>
      <input type="text" name="categoryName" />
      <button type="submit">추가</button>
    </form>
  );
}

export default AddCategoryModal;
