import { useNumberInputs, useRadioInputs } from '../../../../hooks';
import { ProductOptionType } from '../../../../types/product';

export const useCart = (productOption: ProductOptionType[]) => {
  const choiceType: string[] = [];
  const quantityType = ['quantity'];
  const choiceTypeInitialValue: string[] = [];

  productOption.forEach((option) => {
    if (option.type === 'choice') {
      choiceType.push(option.optionName);
      choiceTypeInitialValue.push(option.content[0]);

      return;
    }
    quantityType.push(option.optionName);
  });

  const radioInputs = useRadioInputs(choiceType);
  const numberInputs = useNumberInputs(quantityType);

  const getValue = (key: string) => {
    if (choiceType.includes(key)) {
      return radioInputs.getValue(key);
    } else {
      return numberInputs.getValue(key);
    }
  };

  const getAllValue = () => {
    const options: { quantity: number; [key: string]: string | number } = {
      quantity: 1,
    };

    quantityType.forEach(
      (optionName) => (options[optionName] = getValue(optionName)),
    );
    choiceType.forEach((optionName, idx) => {
      options[optionName] = getValue(optionName) || choiceTypeInitialValue[idx];
    });

    return options;
  };

  return {
    getValue,
    increment: numberInputs.increment,
    decrement: numberInputs.decrement,
    changeRadioValue: radioInputs.changeRadioValue,
    getAllValue: getAllValue,
  };
};
