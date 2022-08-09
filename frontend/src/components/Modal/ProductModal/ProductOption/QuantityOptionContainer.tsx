import React, { useState } from 'react';
import { ProductOptionType } from '../../../../types/product';

interface Props {
  isQuantityOptionOpen: boolean;
  setOptions: React.Dispatch<React.SetStateAction<ProductOptionType[]>>;
  closeOptionContainer: () => void;
}

function QuantityOptionContainer({
  isQuantityOptionOpen,
  setOptions,
  closeOptionContainer,
}: Props) {
  const [optionName, setOptionName] = useState('');

  if (!isQuantityOptionOpen) {
    return <></>;
  }

  const handleAddOption = () => {
    const option: ProductOptionType = {
      type: 'choice',
      optionName: optionName,
      content: [],
    };

    setOptions((prev) => [...prev, option]);
    closeOptionContainer();
  };

  return (
    <>
      <strong>옵션 이름을 입력해주세요.</strong>
      <input
        type="text"
        name="optionName"
        value={optionName}
        onChange={(event) => setOptionName(event.target.value)}
      />
      <button type="button" onClick={handleAddOption}>
        옵션 추가
      </button>
    </>
  );
}

export default QuantityOptionContainer;
