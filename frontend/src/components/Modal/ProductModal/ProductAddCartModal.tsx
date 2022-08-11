import React, { useContext } from 'react';
import { cartContext } from '../../../context/CartProvider';
import { initialProductOptionValue, ProductType } from '../../../types/product';
import { useCart } from './ProductOption/hooks';
import ProductOption from './ProductOption/ProductOption';
import ProductQuantityOption from './ProductOption/ProductQuantityOption';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';

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
    <form onSubmit={handleAddProductToCart}>
      <ProductThumbnail thumbnail={thumbnail} />
      <span>{name}</span>
      <span>{`가격 ${price}원`}</span>
      <ProductOption cartInputs={cartInputs} options={productOption} />
      <div>
        <ProductQuantityOption
          cartInputs={cartInputs}
          option={{ ...initialProductOptionValue, optionName: 'quantity' }}
        />
      </div>
      <button type="submit">담기</button>
    </form>
  );
}

export default ProductAddCartModal;
