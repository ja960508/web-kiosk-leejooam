import React from 'react';
import { CategoryType } from '../../types/category';
import CategoryAddModalTrigger from '../Modal/CategoryModal/CategoryAddModalTrigger';
import Slider from '../Slider/Slider';
import { StyledContainer } from './Category.style';
import CategoryItem from './CategoryItem';

interface CategoryListProps {
  category: CategoryType[];
  setCategory: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

function CategoryList({
  category,
  setCategory,
  setSelectedCategory,
}: CategoryListProps) {
  return (
    <StyledContainer>
      <CategoryAddModalTrigger setCategory={setCategory} />
      <Slider offset={6}>
        {category.map((item, idx) => (
          <CategoryItem
            key={idx}
            category={item}
            setCategory={setCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </Slider>
    </StyledContainer>
  );
}

export default CategoryList;
