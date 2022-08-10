import React, { useContext, useState } from 'react';
import { basketContext } from '../../../context/BasketProvider';
import { ProductType } from '../../../types/product';
import ProductOption from '../../ProductList/ProductOption/ProductOption';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';

interface Props {
  product: ProductType;
  closeModal: () => void;
}

function ProductAddBasketModal({ product, closeModal }: Props) {
  const { changeBasket } = useContext(basketContext);
  const { name, price, productOption, id, thumbnail } = product;
  const [quantity, setQuantity] = useState(1);

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

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev - 1 <= 0 ? 1 : prev - 1));
  };

  return (
    <form onSubmit={handleAddProductToBasket}>
      <ProductThumbnail thumbnail={thumbnail} />
      <span>{name}</span>
      <span>{price}</span>
      <ProductOption options={productOption} id={id} />
      <div>
        <button type="button" onClick={decrementQuantity}>
          -
        </button>
        <input type="number" name="quantity" value={quantity} readOnly />
        <button type="button" onClick={incrementQuantity}>
          +
        </button>
      </div>
      <button type="submit">담기</button>
    </form>
  );
}

export default ProductAddBasketModal;
