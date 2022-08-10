import React from 'react';
import { CategoryType } from '../../types/category';
import CategoryAddModalTrigger from '../Modal/CategoryModal/CategoryAddModalTrigger';
import Slider from '../Slider/Slider';
import { StyledContainer } from './Category.style';
import CategoryItem from './CategoryItem';

interface CategoryListProps {
  categories: CategoryType[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

function CategoryList({
  categories,
  setCategories,
  setSelectedCategory,
}: CategoryListProps) {
  return (
    <StyledContainer>
      <CategoryAddModalTrigger setCategories={setCategories} />
      <Slider offset={6}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            setCategories={setCategories}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </Slider>
    </StyledContainer>
  );
}

export default CategoryList;
