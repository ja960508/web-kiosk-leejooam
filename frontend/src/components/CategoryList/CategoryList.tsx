import React from 'react';
import { CategoryType } from '../../types/category';
import Slider from '../Slider/Slider';
import { StyledContainer } from './Category.style';
import CategoryItem from './CategoryItem';

interface CategoryListType {
  category: CategoryType[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

function CategoryList({ category, setSelectedCategory }: CategoryListType) {
  return (
    <StyledContainer>
      <Slider offset={6}>
        {category.map((item, idx) => (
          <CategoryItem
            key={idx}
            item={item}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </Slider>
    </StyledContainer>
  );
}

export default CategoryList;
