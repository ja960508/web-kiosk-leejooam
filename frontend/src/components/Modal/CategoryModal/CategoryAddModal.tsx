import React from 'react';
import { CategoryType } from '../../../types/category';
import categoryAPI from '../../../api/categoryAPI';
import styled from 'styled-components';
import shadow from '../../../styles/variables/shadow';
import color from '../../../styles/variables/color';

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
    <StyledCategoryAddForm onSubmit={handleAddCategory}>
      <strong>추가할 카테고리 이름을 입력해주세요.</strong>
      <input type="text" name="categoryName" autoFocus autoComplete="off" />
      <button type="submit">추가</button>
    </StyledCategoryAddForm>
  );
}

export default CategoryAddModal;

const StyledCategoryAddForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  box-shadow: ${shadow.normalShadow};

  strong {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  input {
    width: 20rem;
    padding: 10px 20px;
    border: 1px solid ${color.gray};
    border-radius: 10px;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  button[type='submit'] {
    padding: 0.75rem;
    border-radius: 10px;
    color: ${color.white};
    font-size: 1rem;
    background-color: ${color.maroon};
  }
`;
