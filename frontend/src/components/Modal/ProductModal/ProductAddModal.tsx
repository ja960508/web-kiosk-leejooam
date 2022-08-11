import React, { useState } from 'react';
import productAPI from '../../../api/productAPI';
import { useTextInputs } from '../../../hooks';
import {
  ProductAddType,
  initialProductAddValue,
  ProductOptionType,
  ProductType,
} from '../../../types/product';
import { useOptionContainer } from './hooks';
import { StyledProductAddForm } from './ProductAddModal.style';
import ChoiceOptionAddContainer from './ProductOption/ProductAddOption/ChoiceOptionAddContainer';
import QuantityOptionAddContainer from './ProductOption/ProductAddOption/QuantityOptionAddContainer';

interface Props {
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  selectedCategoryId: number;
  closeModal: () => void;
}

function ProductAddModal({
  setProducts,
  selectedCategoryId,
  closeModal,
}: Props) {
  const { data, handleChange } = useTextInputs<ProductAddType>({
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

    if (!(data.name && data.price)) {
      alert('이름과 가격을 모두 입력해주세요.');

      return;
    }

    const product = {
      ...data,
      productOption: options,
      categoryId: Number(selectedCategoryId),
    };
    const insertedId = await productAPI.addProduct(product);

    setProducts((prev) => [...prev, { id: insertedId, ...product }]);
    closeModal();
  };

  return (
    <StyledProductAddForm onSubmit={handleAddProduct}>
      <strong>추가할 상품의 이름을 입력해주세요.</strong>
      <input
        type="text"
        name="productName"
        value={data.name}
        onChange={handleChange('name')}
        autoComplete="off"
      />
      <strong>추가할 상품의 가격을 입력해주세요.</strong>
      <input
        type="text"
        name="productPrice"
        value={data.price}
        onChange={handleChange('price', /[^0-9]/, 10000000)}
        autoComplete="off"
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
        <QuantityOptionAddContainer
          setOptions={setOptions}
          closeOptionContainer={closeOptionContainer}
        />
      )}
      {isChoiceOptionOpen && (
        <ChoiceOptionAddContainer
          setOptions={setOptions}
          closeOptionContainer={closeOptionContainer}
        />
      )}
      <div className="add-options">
        {options.map((item, idx) => (
          <div key={idx}>
            {`${item.optionName} `}
            {item.content.map((value, i) => (
              <span key={i}>{`${value}, `}</span>
            ))}
          </div>
        ))}
      </div>
      <button type="submit">상품 추가</button>
    </StyledProductAddForm>
  );
}

export default ProductAddModal;
