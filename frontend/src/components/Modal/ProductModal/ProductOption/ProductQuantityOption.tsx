import React from 'react';
import { ProductOptionType } from '../../../../types/product';

interface Props {
  option: ProductOptionType;
  cartInputs: {
    getValue: (key: string) => string | number;
    increment: (key: string) => () => void;
    decrement: (key: string) => () => void;
    changeRadioValue: (key: string, value: string) => () => void;
  };
}

function ProductQuantityOption({ option, cartInputs }: Props) {
  const { optionName } = option;
  return (
    <li>
      <label htmlFor={optionName}>{optionName}</label>
      <button type="button" onClick={cartInputs.increment(optionName)}>
        +
      </button>
      <input
        type="number"
        id={optionName}
        name={optionName}
        value={cartInputs.getValue(optionName)}
        readOnly
      />
      <button type="button" onClick={cartInputs.decrement(optionName)}>
        -
      </button>
    </li>
  );
}

export default ProductQuantityOption;
