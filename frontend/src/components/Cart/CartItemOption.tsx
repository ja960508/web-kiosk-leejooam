import React from 'react';

interface Props {
  optionName: string;
  value: string | number;
}

function CartItemOption({ optionName, value }: Props) {
  return (
    <div>
      <span>{optionName}</span>
      <span>
        {value} {typeof value === 'number' && '개'}
      </span>
    </div>
  );
}

export default CartItemOption;
