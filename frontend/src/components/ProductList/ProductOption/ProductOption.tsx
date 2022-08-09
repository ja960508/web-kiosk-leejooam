import React from 'react';
import { ProductOptionType } from '../../../types/product';
import ProductChoiceOption from './ProductChoiceOption';
import ProductQuantityOption from './ProductQuantityOption';

interface Props {
  options: ProductOptionType[];
  id: number;
}

function ProductOption({ options, id }: Props) {
  return (
    <ul>
      {options.map((option, index) => {
        const isChoice = option.type === 'choice';
        const inputName = option.optionName + id;

        if (isChoice) {
          return (
            <ProductChoiceOption
              key={index}
              option={option}
              inputName={inputName}
            />
          );
        }

        return <ProductQuantityOption key={index} option={option} />;
      })}
    </ul>
  );
}

export default ProductOption;
