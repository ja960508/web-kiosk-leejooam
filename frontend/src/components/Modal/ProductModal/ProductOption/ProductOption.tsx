import React from 'react';
import { ProductOptionType } from '../../../../types/product';
import ProductChoiceOption from './ProductChoiceOption';
import { StyledProductOptionList } from './ProductOption.style';
import ProductQuantityOption from './ProductQuantityOption';

interface Props {
  options: ProductOptionType[];
  cartInputs: {
    getValue: (key: string) => string | number;
    increment: (key: string) => () => void;
    decrement: (key: string) => () => void;
    changeRadioValue: (key: string, value: string) => () => void;
  };
}

function ProductOption({ options, cartInputs }: Props) {
  return (
    <StyledProductOptionList>
      {options.map((option, index) => {
        const isChoice = option.type === 'choice';

        if (isChoice) {
          return (
            <ProductChoiceOption
              cartInputs={cartInputs}
              key={index}
              option={option}
            />
          );
        }

        return (
          <ProductQuantityOption
            cartInputs={cartInputs}
            key={index}
            option={option}
          />
        );
      })}
    </StyledProductOptionList>
  );
}

export default ProductOption;
