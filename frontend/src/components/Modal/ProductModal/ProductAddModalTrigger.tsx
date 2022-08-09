import React from 'react';
import { ProductType } from '../../../types/product';
import { useModal } from '../hooks';
import Modal from '../Modal';
import ProductAddModal from './ProductAddModal';

interface Props {
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
  categoryId: number;
}

function ProductAddModalTrigger({ setProduct, categoryId }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal}>
        상품 추가하기
      </button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <ProductAddModal
          setProduct={setProduct}
          categoryId={categoryId}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

export default ProductAddModalTrigger;
