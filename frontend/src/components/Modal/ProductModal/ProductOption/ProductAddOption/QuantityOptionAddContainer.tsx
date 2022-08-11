import React, { useState } from 'react';
import { PlusIcon } from '../../../../../assets/icons';
import { ProductOptionType } from '../../../../../types/product';
import { StyledQuantityOptionContainer } from './ProductAddOption.style';

interface Props {
  setOptions: React.Dispatch<React.SetStateAction<ProductOptionType[]>>;
  closeOptionContainer: () => void;
}

function QuantityOptionAddContainer({
  setOptions,
  closeOptionContainer,
}: Props) {
  const [optionName, setOptionName] = useState('');

  const handleAddOption = () => {
    const option: ProductOptionType = {
      type: 'quantity',
      optionName: optionName,
      content: [],
    };

    setOptions((prev) => [...prev, option]);
    closeOptionContainer();
  };

  return (
    <StyledQuantityOptionContainer>
      <div className="option-guide">옵션(수량) 이름을 입력해주세요.</div>
      <div className="container">
        <input
          type="text"
          name="optionName"
          value={optionName}
          onChange={(event) => setOptionName(event.target.value)}
        />
        <button type="button" onClick={handleAddOption}>
          <PlusIcon />
        </button>
      </div>
    </StyledQuantityOptionContainer>
  );
}

export default QuantityOptionAddContainer;
