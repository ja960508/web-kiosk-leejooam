import React from 'react';
import { CategoryType } from '../../types/category';
import { StyledCategoryList } from './Category.style';
import CategoryItem from './CategoryItem';

interface CategoryListType {
  category: CategoryType[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

function CategoryList({ category, setSelectedCategory }: CategoryListType) {
  return (
    <StyledCategoryList>
      {category.map((item, idx) => (
        <CategoryItem
          key={idx}
          item={item}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </StyledCategoryList>
  );
}

export default CategoryList;
