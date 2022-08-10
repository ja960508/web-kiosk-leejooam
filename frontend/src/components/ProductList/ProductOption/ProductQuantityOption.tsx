import React from 'react';
import { useNumberInputs } from '../../../hooks/useNumberInput';
import { ProductOptionType } from '../../../types/product';

interface Props {
  option: ProductOptionType;
}

function ProductQuantityOption({ option }: Props) {
  const { getValue, increment, decrement } = useNumberInputs([
    option.optionName,
  ]);
  return (
    <li>
      <label htmlFor={option.optionName}>{option.optionName}</label>
      <button onClick={increment(option.optionName)}>+</button>
      <input
        type="number"
        id={option.optionName}
        name={option.optionName}
        value={getValue(option.optionName)}
        readOnly
      />
      <button onClick={decrement(option.optionName)}>-</button>
    </li>
  );
}

export default ProductQuantityOption;
