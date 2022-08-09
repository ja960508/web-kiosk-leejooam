import React from 'react';
import { ProductOptionType } from '../../types/product';

function ProductOption({
  options,
  id,
}: {
  options: ProductOptionType[];
  id: number;
}) {
  return (
    <ul>
      {options.map((option, index) => {
        const isChoice = option.type === 'choice';
        const inputName = option.optionName + id;

        if (isChoice) {
          return (
            <li key={index}>
              <div>{option.optionName}</div>
              {option.content.map((optionContent, idx) => (
                <span key={idx}>
                  <label htmlFor={inputName + idx}>{optionContent}</label>
                  <input type="radio" id={inputName + idx} name={inputName} />
                </span>
              ))}
            </li>
          );
        }

        return (
          <li key={index}>
            <div>{option.optionName}</div>
            <label htmlFor={option.optionName}>{option.optionName}</label>
            <input
              type="number"
              id={option.optionName}
              name={option.optionName}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductOption;
