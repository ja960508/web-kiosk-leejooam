import React from 'react';
import { CategoryType, initialCategoryValue } from '../../types/category';
import CategoryModal from '../Modal/CategoryModal/CategoryModal';
import { useModal } from '../Modal/hooks';
import Modal from '../Modal/Modal';
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
  const [onModal, modalType, setOnModal, openModal, targetValue] =
    useModal<CategoryType>(initialCategoryValue);

  return (
    <StyledContainer>
      <button
        type="button"
        onClick={() => {
          openModal({ type: 'add' });
        }}
      >
        카테고리 추가
      </button>
      <Slider offset={6}>
        {category.map((item, idx) => (
          <CategoryItem
            key={idx}
            item={item}
            setSelectedCategory={setSelectedCategory}
            openModal={openModal}
          />
        ))}
      </Slider>
      {onModal && (
        <Modal setOnModal={setOnModal}>
          <CategoryModal
            setOnModal={setOnModal}
            setCategory={setCategory}
            modalType={modalType}
            targetCategory={targetValue}
          ></CategoryModal>
        </Modal>
      )}
    </StyledContainer>
  );
}

export default CategoryList;
