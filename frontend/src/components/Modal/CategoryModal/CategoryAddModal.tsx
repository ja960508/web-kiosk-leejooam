import React from 'react';
import { CategoryType } from '../../../types/category';
import categoryAPI from '../../../api/categoryAPI';
import { useTextInputs } from '../../../hooks';
import { PrimaryButton } from '../../../styles/commons/PrimaryButton';
import { FormInput } from '../../../styles/commons/FormInput';
import { StyledModalForm } from '../../../styles/commons/StyledModalForm';

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
  const { data, handleChange } = useTextInputs<{ categoryName: string }>({
    initialValue: { categoryName: '' },
  });
  const handleAddCategory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const category = {
      name: data.categoryName,
      storeId,
    };

    const response = await categoryAPI.addCategory(category);

    closeModal();
    setCategories((prev) => [...prev, { ...category, id: response }]);
  };

  return (
    <StyledModalForm onSubmit={handleAddCategory}>
      <strong>추가할 카테고리 이름을 입력해주세요.</strong>
      <FormInput
        type="text"
        name="categoryName"
        autoFocus
        autoComplete="off"
        value={data.categoryName}
        onChange={handleChange('categoryName')}
      />
      <PrimaryButton type="submit">추가</PrimaryButton>
    </StyledModalForm>
  );
}

export default CategoryAddModal;
