import React from 'react';
import { XButton } from '../../../assets/icons';
import { DeleteButton } from '../../../styles/commons/DeleteButton';
import { ProductType } from '../../../types/product';
import withCheckAdmin from '../../HOC/withCheckAdmin';
import { useModal } from '../hooks';
import Modal from '../Modal';
import ProductDeleteModal from './ProductDeleteModal';

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  product: ProductType;
}

function ProductDeleteModalTrigger({ setProducts, product }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <DeleteButton type="button" onClick={openModal}>
        <XButton />
      </DeleteButton>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <ProductDeleteModal
          setProducts={setProducts}
          product={product}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

export default withCheckAdmin(ProductDeleteModalTrigger);
