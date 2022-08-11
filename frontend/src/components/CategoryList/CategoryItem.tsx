import React from 'react';
import { CategoryType } from '../../types/category';
import CategoryDeleteModalTrigger from '../Modal/CategoryModal/CategoryDeleteModalTrigger';
import { StyledCategoryItem } from './Category.style';

interface CategoryItemProps {
  categories: CategoryType[];
  category: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  isSelected: boolean;
  selectedCategory: CategoryType;
}

function CategoryItem({
  categories,
  category,
  setSelectedCategory,
  setCategories,
  isSelected,
  selectedCategory,
}: CategoryItemProps) {
  return (
    <StyledCategoryItem
      onClick={() => setSelectedCategory(category)}
      isSelected={isSelected}
    >
      {category.name}
      <CategoryDeleteModalTrigger
        category={category}
        categories={categories}
        setCategories={setCategories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </StyledCategoryItem>
  );
}

export default CategoryItem;
