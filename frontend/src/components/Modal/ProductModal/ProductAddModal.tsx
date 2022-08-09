import React, { useState } from 'react';
import productAPI from '../../../api/productAPI';
import {
  ProductAddType,
  initialProductAddValue,
  ProductOptionType,
  ProductType,
} from '../../../types/product';
import useInputs, { useOptionContainer } from './hooks';
import { StyledForm } from './ProductAddModal.style';
import ChoiceOptionContainer from './ProductOption/ChoiceOptionContainer';
import QuantityOptionContainer from './ProductOption/QuantityOptionContainer';

interface Props {
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
  categoryId: number;
  closeModal: () => void;
}

function ProductAddModal({ setProduct, categoryId, closeModal }: Props) {
  const { data, handleChange } = useInputs<ProductAddType>({
    initialValue: initialProductAddValue,
  });
  const [options, setOptions] = useState<ProductOptionType[]>([]);
  const {
    isChoiceOptionOpen,
    isQuantityOptionOpen,
    openChoiceOption,
    openQuantityOption,
    closeOptionContainer,
  } = useOptionContainer();

  const handleAddProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const product = {
      ...data,
      productOption: options,
      categoryId: Number(categoryId),
    };
    const insertedId = await productAPI.addProduct(product);

    setProduct((prev) => [...prev, { id: insertedId, ...product }]);
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleAddProduct}>
      <strong>추가할 상품의 이름을 입력해주세요.</strong>
      <input
        type="text"
        name="productName"
        value={data.name}
        onChange={handleChange('name')}
      />
      <strong>추가할 상품의 가격을 입력해주세요.</strong>
      <input
        type="text"
        name="productPrice"
        value={data.price}
        onChange={handleChange('price')}
      />
      <div className="option-btn-container">
        <button type="button" onClick={openChoiceOption}>
          선택옵션 추가
        </button>
        <button type="button" onClick={openQuantityOption}>
          수량옵션 추가
        </button>
      </div>
      {isQuantityOptionOpen && (
        <QuantityOptionContainer
          setOptions={setOptions}
          closeOptionContainer={closeOptionContainer}
        />
      )}
      {isChoiceOptionOpen && (
        <ChoiceOptionContainer
          setOptions={setOptions}
          closeOptionContainer={closeOptionContainer}
        />
      )}
      {options.map((item, idx) => (
        <div key={idx}>{item.optionName}</div>
      ))}
      <button type="submit">추가</button>
    </StyledForm>
  );
}

export default ProductAddModal;
