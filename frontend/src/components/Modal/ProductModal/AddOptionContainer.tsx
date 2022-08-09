import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductOptionType } from '../../../types/product';
import useInputs from './hooks';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

interface AddOptionContainer {
  optionType: string;
  setOptionType: React.Dispatch<React.SetStateAction<string>>;
  setOptions: React.Dispatch<React.SetStateAction<ProductOptionType[]>>;
}

interface OptionType {
  optionName: string;
  optionDetailValue: string;
}

function AddOptionContainer({
  optionType,
  setOptionType,
  setOptions,
}: AddOptionContainer) {
  const [optionDetails, setOptionDetails] = useState<string[]>([]);
  const { data, handleChange, resetInput } = useInputs<OptionType>({
    initialValue: {
      optionName: '',
      optionDetailValue: '',
    },
  });

  const handleAddOption = () => {
    const option: ProductOptionType = {
      type: optionType,
      optionName: data.optionName,
      content: optionDetails,
    };

    setOptions((prev) => [...prev, option]);
    setOptionType('');
  };

  const addOptionDetail = () => {
    setOptionDetails((prev) => {
      return [...prev, data.optionDetailValue];
    });
    resetInput('optionDetailValue');
  };

  return (
    <Div>
      <strong>옵션 이름을 입력해주세요.</strong>
      <input
        type="text"
        name="optionName"
        value={data.optionName}
        onChange={handleChange('optionName')}
      />
      {optionType === 'choice' && (
        <>
          <input
            type="text"
            value={data.optionDetailValue}
            onChange={handleChange('optionDetailValue')}
          />
          <button type="button" onClick={addOptionDetail}>
            옵션 상세 추가
          </button>
        </>
      )}
      {optionDetails.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
      <button type="button" onClick={handleAddOption}>
        옵션 추가
      </button>
    </Div>
  );
}

export default AddOptionContainer;
