import React from 'react';
import { ProductType } from '../../types/product';
import ProductDeleteModalTrigger from '../Modal/ProductModal/ProductDeleteModalTrigger';
import ProductOption from './ProductOption/ProductOption';

interface ProductItemType {
  item: ProductType;
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

function ProductItem({ item, setProduct }: ProductItemType) {
  return (
    <li>
      <ProductDeleteModalTrigger setProduct={setProduct} product={item} />
      <div className="extra-info">
        {!!item.isPopular && <span>인기</span>}
        {!!item.isSoldOut && <span>완판</span>}
      </div>
      <img src={item.thumbnail} alt="product_thumbnail" />
      <div>상품명: {item.name}</div>
      <div>가격: {item.price}원</div>
      <ProductOption options={item.productOption} id={item.id} />
    </li>
  );
}

export default ProductItem;
