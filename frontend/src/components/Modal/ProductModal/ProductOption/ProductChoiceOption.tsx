import React from 'react';
import { ProductOptionType } from '../../../../types/product';

interface Props {
  option: ProductOptionType;
}

function ProductChoiceOption({ option }: Props) {
  return (
    <li>
      <div>{option.optionName}</div>
      {option.content?.map((optionContent, idx) => (
        <label key={idx}>
          {optionContent}
          <input
            type="radio"
            name={option.optionName}
            value={optionContent}
            defaultChecked={idx === 0}
          />
        </label>
      ))}
    </li>
  );
}

export default ProductChoiceOption;
