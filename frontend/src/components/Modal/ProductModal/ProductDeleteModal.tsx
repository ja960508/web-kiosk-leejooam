import React from 'react';
import productAPI from '../../../api/productAPI';
import { StyledDeleteModalForm } from '../../../styles/commons/DeleteModalForm';
import { PrimaryButton } from '../../../styles/commons/PrimaryButton';
import { ProductType } from '../../../types/product';

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  product: ProductType;
  closeModal: () => void;
}

function ProductDeleteModal({ setProducts, product, closeModal }: Props) {
  const deleteProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (product) {
      await productAPI.deleteProductById(product.id);
      closeModal();
      setProducts((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  return (
    <StyledDeleteModalForm onSubmit={deleteProduct}>
      <strong>해당 상품을 삭제하시겠습니까?</strong>
      <PrimaryButton type="submit">삭제</PrimaryButton>
    </StyledDeleteModalForm>
  );
}

export default ProductDeleteModal;
