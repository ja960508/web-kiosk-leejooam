import React from 'react';
import { ProductOptionType } from '../../../types/product';
import ProductChoiceOption from './ProductChoiceOption';
import { StyledProductOptionList } from './ProductOption.style';
import ProductQuantityOption from './ProductQuantityOption';

interface Props {
  options: ProductOptionType[];
}

function ProductOption({ options }: Props) {
  return (
    <StyledProductOptionList>
      {options.map((option, index) => {
        const isChoice = option.type === 'choice';

        if (isChoice) {
          return <ProductChoiceOption key={index} option={option} />;
        }

        return <ProductQuantityOption key={index} option={option} />;
      })}
    </StyledProductOptionList>
  );
}

export default ProductOption;
