import React, { useContext } from 'react';
import { adminAuthorityContext } from '../../context/AdminAuthorityProvider';
import { ProductType } from '../../types/product';
import ProductDeleteModalTrigger from '../Modal/ProductModal/ProductDeleteModalTrigger';
import ProductOption from './ProductOption/ProductOption';

interface ProductItemType {
  item: ProductType;
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

function ProductItem({ item, setProduct }: ProductItemType) {
  const { adminAuthority } = useContext(adminAuthorityContext);
  const handleProductClick = () => {
    if (adminAuthority) return;

    console.log(item);
  };

  return (
    <li onClick={handleProductClick}>
      <ProductDeleteModalTrigger setProduct={setProduct} product={item} />
      <div className="extra-info">
        {!!item.isPopular && <span>인기</span>}
        {!!item.isSoldOut && <span>완판</span>}
      </div>
      <img src={item.thumbnail} alt="product_thumbnail" />
      <div>{item.name}</div>
      <div>{item.price}원</div>
      <ProductOption options={item.productOption} id={item.id} />
    </li>
  );
}

export default ProductItem;
