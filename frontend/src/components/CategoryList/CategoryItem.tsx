import React from 'react';
import { CategoryType } from '../../types/category';
import CategoryDeleteModalTrigger from '../Modal/CategoryModal/CategoryDeleteModalTrigger';

interface CategoryItemProps {
  category: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}

function CategoryItem({
  category,
  setSelectedCategory,
  setCategory,
}: CategoryItemProps) {
  return (
    <li onClick={() => setSelectedCategory(category)}>
      {category.name}
      <CategoryDeleteModalTrigger
        category={category}
        setCategory={setCategory}
      />
    </li>
  );
}

export default CategoryItem;
