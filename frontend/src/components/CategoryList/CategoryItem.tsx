import React from 'react';
import { CategoryType } from '../../types/category';

interface CategoryItemType {
  item: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

function CategoryItem({ item, setSelectedCategory }: CategoryItemType) {
  return <li onClick={() => setSelectedCategory(item)}>{item.name}</li>;
}

export default CategoryItem;
