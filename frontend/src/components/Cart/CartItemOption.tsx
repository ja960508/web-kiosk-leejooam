import React from 'react';

interface Props {
  optionName: string;
  value: string | number;
}

function CartItemOption({ optionName, value }: Props) {
  return (
    <div className="product-option">{`${optionName} ${value} ${
      typeof value === 'number' ? '개' : ''
    }`}</div>
  );
}

export default CartItemOption;
