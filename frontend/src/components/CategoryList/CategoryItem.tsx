import React from 'react';
import { CategoryType } from '../../types/category';

interface CategoryItemType {
  item: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

function CategoryItem({ item, setSelectedCategory }: CategoryItemType) {
  return (
    <li onClick={() => setSelectedCategory(item)}>
      {item.name}
      <div className="categoryEdit">
        <button type="button">수정</button>
        <button type="button">삭제</button>
      </div>
    </li>
  );
}

export default CategoryItem;
