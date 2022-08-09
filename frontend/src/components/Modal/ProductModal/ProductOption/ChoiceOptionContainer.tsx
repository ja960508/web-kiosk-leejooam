import React, { useState } from 'react';
import { ProductOptionType } from '../../../../types/product';

interface Props {
  setOptions: React.Dispatch<React.SetStateAction<ProductOptionType[]>>;
  closeOptionContainer: () => void;
}

function ChoiceOptionContainer({ setOptions, closeOptionContainer }: Props) {
  const [optionName, setOptionName] = useState('');
  const [optionDetailValue, setOptionDetailValue] = useState('');
  const [optionDetails, setOptionDetails] = useState<string[]>([]);

  const handleAddOption = () => {
    const option: ProductOptionType = {
      type: 'choice',
      optionName: optionName,
      content: optionDetails,
    };

    setOptions((prev) => [...prev, option]);
    closeOptionContainer();
  };

  const addOptionDetail = () => {
    setOptionDetails((prev) => [...prev, optionDetailValue]);
    setOptionDetailValue('');
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
      <strong>상세 옵션 내용을 입력해주세요.</strong>
      <input
        type="text"
        value={optionDetailValue}
        onChange={(event) => setOptionDetailValue(event.target.value)}
      />
      <button type="button" onClick={addOptionDetail}>
        옵션 상세 추가
      </button>
      <button type="button" onClick={handleAddOption}>
        옵션 추가
      </button>
    </>
  );
}

export default ChoiceOptionContainer;
