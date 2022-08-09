import React, { useState } from 'react';
import { addProduct } from '../../../api/request';
import {
  ProductAddType,
  initialProductAddValue,
  ProductOptionType,
  ProductType,
} from '../../../types/product';
import useInputs, { useOptionContainer } from './hooks';
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
    const insertedId = await addProduct(product);

    setProduct((prev) => [...prev, { id: insertedId, ...product }]);
    closeModal();
  };

  return (
    <form onSubmit={handleAddProduct}>
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
        <QuantityOptionContainer
          setOptions={setOptions}
          isQuantityOptionOpen={isQuantityOptionOpen}
          closeOptionContainer={closeOptionContainer}
        />
        <ChoiceOptionContainer
          setOptions={setOptions}
          isChoiceOptionOpen={isChoiceOptionOpen}
          closeOptionContainer={closeOptionContainer}
        />
      </div>
      {options.map((item, idx) => (
        <div key={idx}>{item.optionName}</div>
      ))}
      <button type="submit">추가</button>
    </form>
  );
}

export default ProductAddModal;
