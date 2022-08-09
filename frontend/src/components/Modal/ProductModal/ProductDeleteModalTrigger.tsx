import React from 'react';
import { ProductType } from '../../../types/product';
import { useModal } from '../hooks';
import Modal from '../Modal';
import ProductDeleteModal from './ProductDeleteModal';

interface Props {
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
  product: ProductType;
}

function ProductDeleteModalTrigger({ setProduct, product }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal}>
        삭제
      </button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <ProductDeleteModal
          setProduct={setProduct}
          product={product}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

export default ProductDeleteModalTrigger;
