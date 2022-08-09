import React from 'react';
import { CategoryType } from '../../types/category';
import { openModalType } from '../Modal/hooks';

interface CategoryItemProps {
  item: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
  openModal: ({ type }: openModalType<CategoryType>) => void;
}

function CategoryItem({
  item,
  setSelectedCategory,
  openModal,
}: CategoryItemProps) {
  return (
    <li onClick={() => setSelectedCategory(item)}>
      {item.name}
      <div className="categoryEdit">
        <button
          type="button"
          onClick={() => openModal({ type: 'delete', targetValue: item })}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default CategoryItem;
