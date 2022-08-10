import React, { useContext } from 'react';
import { basketContext } from '../../../context/BasketProvider';
import { useNumberInputs } from '../../../hooks/useNumberInput';
import { ProductType } from '../../../types/product';
import ProductOption from '../../ProductList/ProductOption/ProductOption';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';

interface Props {
  product: ProductType;
  closeModal: () => void;
}

function ProductAddBasketModal({ product, closeModal }: Props) {
  const { changeBasket } = useContext(basketContext);
  const { name, price, productOption, thumbnail } = product;
  const { getValue, increment, decrement } = useNumberInputs(['quantity']);

  const handleAddProductToBasket = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const { quantity } = event.target as HTMLFormElement;

    const newBasket = {
      product: product,
      quantity: quantity.value,
    };

    changeBasket((prev) => [...prev, newBasket]);
    closeModal();
  };

  return (
    <form onSubmit={handleAddProductToBasket}>
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

export default ProductAddBasketModal;
