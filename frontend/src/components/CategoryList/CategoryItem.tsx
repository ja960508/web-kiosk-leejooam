import React from 'react';
import { CategoryType } from '../../types/category';
import { openModalType } from './hooks';

interface CategoryItemProps {
  item: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
  openModal: ({ type, targetCategory }: openModalType) => void;
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
          onClick={() => openModal({ type: 'delete', targetCategory: item })}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default CategoryItem;
