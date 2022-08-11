import React from 'react';
import { ProductOptionType } from '../../../../types/product';
import {
  StyledProductChioceOption,
  StyleOptionName,
} from './ProductOption.style';

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
      <StyleOptionName className="option-name">{optionName}</StyleOptionName>
      <ul className="option-content-list">
        {content.map((optionContent, idx) => (
          <li className="option-content-item" key={idx}>
            <input
              type="radio"
              name={optionName}
              id={optionContent}
              value={optionContent}
              defaultChecked={idx === 0}
              onChange={cartInputs.changeRadioValue(optionName, optionContent)}
            />
            <label className="choice-label" htmlFor={optionContent}>
              {optionContent}
            </label>
          </li>
        ))}
      </ul>
    </StyledProductChioceOption>
  );
}

export default ProductChoiceOption;
