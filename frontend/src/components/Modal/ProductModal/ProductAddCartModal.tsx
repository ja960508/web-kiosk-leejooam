import React, { useContext } from 'react';
import { cartContext } from '../../../context/CartProvider';
import { PrimaryButton } from '../../../styles/commons/PrimaryButton';
import { initialProductOptionValue, ProductType } from '../../../types/product';
import { StyledProductAddCartModal } from './ProductAddCartModal.style';
import { useCart } from './ProductOption/hooks';
import ProductOption from './ProductOption/ProductOption';
import ProductQuantityOption from './ProductOption/ProductQuantityOption';
import ProductThumbnail from '../../ProductList/ProductThumbnail/ProductThumbnail';

interface Props {
  product: ProductType;
  closeModal: () => void;
}

function ProductAddCartModal({ product, closeModal }: Props) {
  const { addCartItem } = useContext(cartContext);
  const { name, price, productOption, thumbnail } = product;
  const cartInputs = useCart(productOption);

  const handleAddProductToCart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { quantity, ...options } = cartInputs.getAllValue();

    const newCartItem = {
      product: product,
      quantity,
      options,
    };

    addCartItem(newCartItem);
    closeModal();
  };

  return (
    <StyledProductAddCartModal onSubmit={handleAddProductToCart}>
      <ProductThumbnail thumbnail={thumbnail} />
      <div className="product-meta">
        <strong>{name}</strong>
        <div className="price">{`${price}원`}</div>
        <ProductOption cartInputs={cartInputs} options={productOption} />
        <div>
          <ProductQuantityOption
            cartInputs={cartInputs}
            option={{ ...initialProductOptionValue, optionName: 'quantity' }}
          />
        </div>
        <PrimaryButton type="submit">담기</PrimaryButton>
      </div>
    </StyledProductAddCartModal>
  );
}

export default ProductAddCartModal;
