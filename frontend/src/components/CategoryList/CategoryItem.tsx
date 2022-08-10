import React from 'react';
import { CategoryType } from '../../types/category';
import CategoryDeleteModalTrigger from '../Modal/CategoryModal/CategoryDeleteModalTrigger';

interface CategoryItemProps {
  category: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}

function CategoryItem({
  category,
  setSelectedCategory,
  setCategories,
}: CategoryItemProps) {
  return (
    <li onClick={() => setSelectedCategory(category)}>
      {category.name}
      <CategoryDeleteModalTrigger
        category={category}
        setCategories={setCategories}
      />
    </li>
  );
}

export default CategoryItem;
