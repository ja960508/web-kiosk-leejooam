import React, { useContext } from 'react';
import { cartContext } from '../../../context/CartProvider';
import { ProductType } from '../../../types/product';
import { useCart } from './ProductOption/hooks';
import ProductOption from './ProductOption/ProductOption';
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
    const options = cartInputs.getAllValue();

    const newCartItem = {
      product: product,
      options,
    };

    addCartItem(newCartItem);
    closeModal();
  };

  return (
    <form onSubmit={handleAddProductToCart}>
      <ProductThumbnail thumbnail={thumbnail} />
      <span>{name}</span>
      <span>가격 {price}원</span>
      <ProductOption cartInputs={cartInputs} options={productOption} />
      <div>
        <button type="button" onClick={cartInputs.decrement('quantity')}>
          -
        </button>
        <input
          type="number"
          name="quantity"
          value={cartInputs.getValue('quantity')}
          readOnly
        />
        <button type="button" onClick={cartInputs.increment('quantity')}>
          +
        </button>
      </div>
      <button type="submit">담기</button>
    </form>
  );
}

export default ProductAddCartModal;
