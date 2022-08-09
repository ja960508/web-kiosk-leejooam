import React from 'react';
import { CategoryType } from '../../types/category';
import { initialProductType, ProductType } from '../../types/product';
import { useModal } from '../Modal/hooks';
import Modal from '../Modal/Modal';
import ProductModal from '../Modal/ProductModal/ProductModal';
import Slider from '../Slider/Slider';
import { StyledProductList } from './Product.style';
import ProductItem from './ProductItem';

interface ProductListType {
  product: ProductType[];
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
  selectedCategory: CategoryType;
}

function ProductList({
  product,
  setProduct,
  selectedCategory,
}: ProductListType) {
  const [onModal, modalType, setOnModal, openModal, targetValue] =
    useModal<ProductType>(initialProductType);

  return (
    <StyledProductList>
      <button
        type="button"
        onClick={() => {
          openModal({ type: 'add' });
        }}
      >
        상품 추가하기
      </button>
      <Slider offset={9} line={3}>
        {product.map((item, idx) => (
          <ProductItem key={idx} item={item} openModal={openModal} />
        ))}
      </Slider>
      {onModal && (
        <Modal setOnModal={setOnModal}>
          <ProductModal
            setOnModal={setOnModal}
            setProduct={setProduct}
            modalType={modalType}
            targetProduct={targetValue}
            selectedCategory={selectedCategory}
          ></ProductModal>
        </Modal>
      )}
    </StyledProductList>
  );
}

export default ProductList;
