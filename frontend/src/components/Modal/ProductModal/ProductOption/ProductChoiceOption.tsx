import React from 'react';
import { ProductOptionType } from '../../../../types/product';
import { StyledProductChioceOption } from './ProductOption.style';

interface Props {
  option: ProductOptionType;
  cartInputs: {
    getValue: (key: string) => string | number;
    increment: (key: string) => () => void;
    decrement: (key: string) => () => void;
    changeRadioValue: (key: string, value: string) => () => void;
  };
}

function ProductChoiceOption({ option, cartInputs }: Props) {
  const { optionName, content } = option;

  return (
    <StyledProductChioceOption>
      <div>{optionName}</div>
      {content.map((optionContent, idx) => (
        <label key={idx}>
          {optionContent}
          <input
            type="radio"
            name={optionName}
            value={optionContent}
            defaultChecked={idx === 0}
            onChange={cartInputs.changeRadioValue(optionName, optionContent)}
          />
        </label>
      ))}
    </StyledProductChioceOption>
  );
}

export default ProductChoiceOption;
