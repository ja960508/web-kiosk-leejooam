import React, { useContext } from 'react';
import { cartContext } from '../../../context/CartProvider';
import { useNumberInputs } from '../../../hooks';
import { ProductType } from '../../../types/product';
import ProductOption from '../../ProductList/ProductOption/ProductOption';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';

interface Props {
  product: ProductType;
  closeModal: () => void;
}

function ProductAddCartModal({ product, closeModal }: Props) {
  const { changeCart } = useContext(cartContext);
  const { name, price, productOption, thumbnail } = product;
  const { getValue, increment, decrement } = useNumberInputs(['quantity']);

  const handleAddProductToCart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { quantity } = event.target as HTMLFormElement;

    const newCartItem = {
      product: product,
      quantity: quantity.value,
    };

    changeCart((prev) => [...prev, newCartItem]);
    closeModal();
  };

  return (
    <form onSubmit={handleAddProductToCart}>
      <ProductThumbnail thumbnail={thumbnail} />
      <span>{name}</span>
      <span>가격 {price}원</span>
      <ProductOption options={productOption} />
      <div>
        <button type="button" onClick={decrement('quantity')}>
          -
        </button>
        <input
          type="number"
          name="quantity"
          value={getValue('quantity')}
          readOnly
        />
        <button type="button" onClick={increment('quantity')}>
          +
        </button>
      </div>
      <button type="submit">담기</button>
    </form>
  );
}

export default ProductAddCartModal;
