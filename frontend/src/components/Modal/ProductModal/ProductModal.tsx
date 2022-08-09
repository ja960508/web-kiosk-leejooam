import React from 'react';
import { CategoryType } from '../../../types/category';
import { ProductType } from '../../../types/product';
import AddProductModal from './AddProductModal';
import DeleteProductModal from './DeleteProductModal';

export interface ProductModalProps {
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
  modalType: string;
  targetProduct?: ProductType;
  selectedCategory: CategoryType;
}

export interface ModalProps {
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
  targetProduct?: ProductType;
  categoryId: string;
}

function modalMapper(modalType: string) {
  switch (modalType) {
    case 'add':
      return AddProductModal;
    case 'delete':
      return DeleteProductModal;
    default:
      return function Default() {
        return (
          <form>
            <strong>잘못된 경로입니다.</strong>
          </form>
        );
      };
  }
}

function ProductModal({
  setOnModal,
  setProduct,
  modalType,
  targetProduct,
  selectedCategory,
}: ProductModalProps) {
  const Modal = modalMapper(modalType);
  const categoryId = selectedCategory.id;

  return (
    <Modal
      setOnModal={setOnModal}
      setProduct={setProduct}
      targetProduct={targetProduct}
      categoryId={categoryId}
    />
  );
}

export default ProductModal;
