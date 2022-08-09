import React, { useState } from 'react';
import { addProduct } from '../../../api/product/request';
import {
  AddProductType,
  initialAddProduct,
  ProductOptionType,
} from '../../../types/product';
import AddOptionContainer from './AddOptionContainer';
import useInputs from './hooks';
import { ModalProps } from './ProductModal';

function AddProductModal({ setOnModal, setProduct, categoryId }: ModalProps) {
  const { data, handleChange } = useInputs<AddProductType>({
    initialValue: initialAddProduct,
  });
  const [options, setOptions] = useState<ProductOptionType[]>([]);
  const [optionType, setOptionType] = useState('');
  const addNewProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const product = {
      ...data,
      productOption: options,
      categoryId: Number(categoryId),
    };

    console.log(product);

    const insertedId = await addProduct(product);
    setProduct((prev) => [...prev, { id: insertedId, ...product }]);
    setOnModal(false);
  };

  return (
    <form onSubmit={addNewProduct}>
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
        <button type="button" onClick={() => setOptionType('choice')}>
          선택 옵션
        </button>
        <button type="button" onClick={() => setOptionType('quantity')}>
          수량 옵션
        </button>
      </div>
      {optionType && (
        <AddOptionContainer
          optionType={optionType}
          setOptionType={setOptionType}
          setOptions={setOptions}
        />
      )}
      {options.map((item, idx) => (
        <div key={idx}>{item.optionName}</div>
      ))}
      <button type="submit">추가</button>
    </form>
  );
}

export default AddProductModal;
