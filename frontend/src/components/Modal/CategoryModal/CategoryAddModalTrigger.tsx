import React, { useContext } from 'react';
import { AddCategoryIcon } from '../../../assets/icons';
import { storeContext } from '../../../context/StoreProvider';
import { CategoryType } from '../../../types/category';
import withCheckAdmin from '../../HOC/withCheckAdmin';
import { useModal } from '../hooks';
import Modal from '../Modal';
import CategoryAddModal from './CategoryAddModal';
import { StyledCategoryAddModal } from './CategoryAddModal.style';

interface Props {
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}

function CategoryAddModalTrigger({ setCategories }: Props) {
  const { store } = useContext(storeContext);
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <StyledCategoryAddModal>
      <button className="add-category-btn" type="button" onClick={openModal}>
        <AddCategoryIcon />
        카테고리 추가
      </button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <CategoryAddModal
          storeId={store.id}
          closeModal={closeModal}
          setCategories={setCategories}
        />
      </Modal>
    </StyledCategoryAddModal>
  );
}

export default withCheckAdmin(CategoryAddModalTrigger);
