import React from 'react';
import { CategoryType } from '../../types/category';
import Slider from '../Slider/Slider';
import CategoryItem from './CategoryItem';

interface CategoryListType {
  category: CategoryType[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

function CategoryList({ category, setSelectedCategory }: CategoryListType) {
  return (
    <Slider offset={5}>
      {category.map((item, idx) => (
        <CategoryItem
          key={idx}
          item={item}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </Slider>
  );
}

export default CategoryList;
