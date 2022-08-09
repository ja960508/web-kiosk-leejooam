import React from 'react';
import productAPI from '../../../api/productAPI';
import { ProductType } from '../../../types/product';

interface Props {
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
  product: ProductType;
  closeModal: () => void;
}

function ProductDeleteModal({ setProduct, product, closeModal }: Props) {
  const deleteProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (product) {
      await productAPI.deleteProductById(product.id);
      closeModal();
      setProduct((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  return (
    <form onSubmit={deleteProduct}>
      <strong>해당 상품을 삭제하시겠습니까?</strong>
      <button type="submit">삭제</button>
    </form>
  );
}

export default ProductDeleteModal;
