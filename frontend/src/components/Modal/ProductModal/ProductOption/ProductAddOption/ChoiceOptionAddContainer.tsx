import React, { useState } from 'react';
import { PlusIcon } from '../../../../../assets/icons';
import { useTextInputs } from '../../../../../hooks';
import { FormInput } from '../../../../../styles/commons/FormInput';
import { ProductOptionType } from '../../../../../types/product';
import { StyledChoiceOptionContainer } from './ProductAddOption.style';

interface Props {
  setOptions: React.Dispatch<React.SetStateAction<ProductOptionType[]>>;
  closeOptionContainer: () => void;
}

interface ProductAddOptionType {
  optionName: string;
  optionDetailValue: string;
}

function ChoiceOptionAddContainer({ setOptions, closeOptionContainer }: Props) {
  const { data, handleChange } = useTextInputs<ProductAddOptionType>({
    initialValue: {
      optionName: '',
      optionDetailValue: '',
    },
  });
  const [optionDetails, setOptionDetails] = useState<string[]>([]);

  const handleAddOption = () => {
    const option: ProductOptionType = {
      type: 'choice',
      optionName: data.optionName,
      content: optionDetails,
    };

    if (!(data.optionName && optionDetails.length)) {
      alert('올바른 값을 입력해주세요.');

      return;
    }
    setOptions((prev) => [...prev, option]);
    closeOptionContainer();
  };

  const addOptionDetail = () => {
    const { optionDetailValue } = data;
    if (optionDetails.length >= 3) {
      alert('선택 옵션은 3가지 이상 추가할 수 없습니다.');
      data.optionDetailValue = '';

      return;
    }

    setOptionDetails((prev) => [...prev, optionDetailValue]);
    data.optionDetailValue = '';
  };

  console.log(optionDetails);

  return (
    <StyledChoiceOptionContainer>
      <div className="option-guide option-name">
        옵션(선택) 이름을 입력해주세요.
      </div>
      <div className="container">
        <FormInput
          type="text"
          name="optionName"
          value={data.optionName}
          onChange={handleChange('optionName')}
          autoComplete="off"
        />
        <button type="button" onClick={handleAddOption}>
          <PlusIcon />
        </button>
      </div>
      <div className="option-guide option-detail">
        상세 옵션 내용을 입력해주세요.
      </div>
      <div className="option-detail-values">
        {optionDetails.map((item, idx) => (
          <span key={idx}>{`${item} `}</span>
        ))}
      </div>
      <div className="container">
        <FormInput
          type="text"
          value={data.optionDetailValue}
          onChange={handleChange('optionDetailValue')}
          autoComplete="off"
        />
        <button type="button" onClick={addOptionDetail}>
          <PlusIcon />
        </button>
      </div>
    </StyledChoiceOptionContainer>
  );
}

export default ChoiceOptionAddContainer;
