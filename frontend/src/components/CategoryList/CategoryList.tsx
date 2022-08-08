import React, { useContext, useState } from 'react';
import { addCategory } from '../../api/category/request';
import { storeContext } from '../../context/StoreProvider';
import { CategoryType } from '../../types/category';
import Modal from '../Modal/Modal';
import Slider from '../Slider/Slider';
import { StyledContainer } from './Category.style';
import CategoryItem from './CategoryItem';

interface CategoryListType {
  category: CategoryType[];
  setCategory: React.Dispatch<React.SetStateAction<CategoryType[]>>;

  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

function CategoryList({
  category,
  setCategory,
  setSelectedCategory,
}: CategoryListType) {
  const [onModal, setOnModal] = useState(false);
  const { store } = useContext(storeContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { categoryName } = event.target as HTMLFormElement;
    const category = {
      name: categoryName.value,
      storeId: store.id,
    };

    const response = await addCategory(category);

    setOnModal(false);
    setCategory((prev) => [...prev, { ...category, id: response }]);
  };

  return (
    <StyledContainer>
      <button type="button" onClick={() => setOnModal(true)}>
        카테고리 추가
      </button>
      <Slider offset={6}>
        {category.map((item, idx) => (
          <CategoryItem
            key={idx}
            item={item}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </Slider>
      {onModal && (
        <Modal setOnModal={setOnModal}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="categoryName" />
            <button type="submit">제출</button>
          </form>
        </Modal>
      )}
    </StyledContainer>
  );
}

export default CategoryList;
