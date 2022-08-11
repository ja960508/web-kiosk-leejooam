import React from 'react';
import { XButton } from '../../../assets/icons';
import { ProductType } from '../../../types/product';
import withCheckAdmin from '../../HOC/withCheckAdmin';
import { useModal } from '../hooks';
import Modal from '../Modal';
import ProductDeleteModal from './ProductDeleteModal';
import { StyledProductDeleteModal } from './ProductDeleteModal.style';

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  product: ProductType;
}

function ProductDeleteModalTrigger({ setProducts, product }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <StyledProductDeleteModal>
      <button type="button" className="delete-btn" onClick={openModal}>
        <XButton />
      </button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <ProductDeleteModal
          setProducts={setProducts}
          product={product}
          closeModal={closeModal}
        />
      </Modal>
    </StyledProductDeleteModal>
  );
}

export default withCheckAdmin(ProductDeleteModalTrigger);
