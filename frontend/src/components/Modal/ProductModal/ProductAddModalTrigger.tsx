import React from 'react';
import { GoodsIcon } from '../../../assets/icons';
import { PrimaryButton } from '../../../styles/commons/PrimaryButton';
import { ProductType } from '../../../types/product';
import withCheckAdmin from '../../HOC/withCheckAdmin';
import { useModal } from '../hooks';
import Modal from '../Modal';
import ProductAddModal from './ProductAddModal';

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  selectedCategoryId: number;
}

function ProductAddModalTrigger({ setProducts, selectedCategoryId }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <PrimaryButton type="button" onClick={openModal}>
        <GoodsIcon />
        상품 추가하기
      </PrimaryButton>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <ProductAddModal
          setProducts={setProducts}
          selectedCategoryId={selectedCategoryId}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

export default withCheckAdmin(ProductAddModalTrigger);
