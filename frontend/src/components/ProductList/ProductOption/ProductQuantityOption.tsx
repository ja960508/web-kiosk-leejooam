import React from 'react';
import { ProductOptionType } from '../../../types/product';

interface Props {
  option: ProductOptionType;
}

function ProductQuantityOption({ option }: Props) {
  return (
    <li>
      <div>{option.optionName}</div>
      <label htmlFor={option.optionName}>{option.optionName}</label>
      <input type="number" id={option.optionName} name={option.optionName} />
    </li>
  );
}

export default ProductQuantityOption;
