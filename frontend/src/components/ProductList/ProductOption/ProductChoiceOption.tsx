import React from 'react';
import { ProductOptionType } from '../../../types/product';

interface Props {
  option: ProductOptionType;
  inputName: string;
}

function ProductChoiceOption({ option, inputName }: Props) {
  return (
    <li>
      <div>{option.optionName}</div>
      {option.content?.map((optionContent, idx) => (
        <span key={idx}>
          <label htmlFor={inputName + idx}>{optionContent}</label>
          <input type="radio" id={inputName + idx} name={inputName} />
        </span>
      ))}
    </li>
  );
}

export default ProductChoiceOption;
