import React from 'react';
import { deleteProductById } from '../../../api/product/request';
import { ModalProps } from './ProductModal';

function DeleteProductModal({
  setOnModal,
  setProduct,
  targetProduct,
}: ModalProps) {
  const deleteProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (targetProduct) {
      await deleteProductById(targetProduct.id);
      setOnModal(false);
      setProduct((prev) => prev.filter((item) => item.id !== targetProduct.id));
    }
  };

  return (
    <form onSubmit={deleteProduct}>
      <strong>해당 상품을 삭제하시겠습니까?</strong>
      <button type="submit">삭제</button>
    </form>
  );
}

export default DeleteProductModal;
