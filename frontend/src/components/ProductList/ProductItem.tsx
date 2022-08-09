import React from 'react';
import { ProductType } from '../../types/product';
import { openModalType } from '../Modal/hooks';
import ProductOption from './ProductOption';

interface ProductItemType {
  item: ProductType;
  openModal: ({ type }: openModalType<ProductType>) => void;
}

function ProductItem({ item, openModal }: ProductItemType) {
  return (
    <li>
      <button
        type="button"
        onClick={() => openModal({ type: 'delete', targetValue: item })}
      >
        삭제
      </button>
      <div className="extra-info">
        {!!item.isPopular && <span>인기</span>}
        {!!item.isSoldOut && <span>완판</span>}
      </div>
      <img src={item.thumbnail} alt="product_thumbnail" />
      <div>상품명: {item.name}</div>
      <div>가격: {item.price}원</div>
      {item.productOption && (
        <ProductOption options={item.productOption} id={item.id} />
      )}
    </li>
  );
}

export default ProductItem;
