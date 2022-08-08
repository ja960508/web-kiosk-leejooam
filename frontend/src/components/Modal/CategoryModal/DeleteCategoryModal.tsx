import React from 'react';
import { deleteCategoryById } from '../../../api/category/request';
import { ModalProps } from './CategoryModal';

function DeleteCategoryModal({
  setOnModal,
  setCategory,
  targetCategory,
}: ModalProps) {
  const deleteCategory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (targetCategory) {
      await deleteCategoryById(targetCategory.id);
      setOnModal(false);
      setCategory((prev) =>
        prev.filter((item) => item.id !== targetCategory.id),
      );
    }
  };

  return (
    <form onSubmit={deleteCategory}>
      <strong>해당 카테고리를 삭제하시겠습니까?</strong>
      <button type="submit">삭제</button>
    </form>
  );
}

export default DeleteCategoryModal;
