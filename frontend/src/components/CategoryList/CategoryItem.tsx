import React from 'react';
import { CategoryType } from '../../types/category';
import CategoryDeleteModalTrigger from '../Modal/CategoryModal/CategoryDeleteModalTrigger';
import { StyledCategoryItem } from './Category.style';

interface CategoryItemProps {
  category: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  isSelected: boolean;
}

function CategoryItem({
  category,
  setSelectedCategory,
  setCategories,
  isSelected,
}: CategoryItemProps) {
  return (
    <StyledCategoryItem
      onClick={() => setSelectedCategory(category)}
      isSelected={isSelected}
    >
      {category.name}
      <CategoryDeleteModalTrigger
        category={category}
        setCategories={setCategories}
      />
    </StyledCategoryItem>
  );
}

export default CategoryItem;
