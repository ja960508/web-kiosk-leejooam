import React from 'react';
import { DecrementIcon, IncrementIcon } from '../../../../assets/icons';
import { ProductOptionType } from '../../../../types/product';
import { StyledProductQuantityOption } from './ProductOption.style';

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
    <StyledProductQuantityOption>
      <label className="option-name" htmlFor={optionName}>
        {optionName === 'quantity' ? '수량' : optionName}
      </label>
      <div className="quantity-controller">
        <button type="button" onClick={cartInputs.decrement(optionName)}>
          <DecrementIcon />
        </button>
        <div className="option-value">{cartInputs.getValue(optionName)}</div>
        <input
          className="quantity-input"
          type="number"
          id={optionName}
          name={optionName}
          value={cartInputs.getValue(optionName)}
          readOnly
        />
        <button type="button" onClick={cartInputs.increment(optionName)}>
          <IncrementIcon />
        </button>
      </div>
    </StyledProductQuantityOption>
  );
}

export default ProductQuantityOption;
