import React from 'react';
import { ProductType } from '../../types/product';
import { StyledProductList } from './Product.style';
import ProductItem from './ProductItem';

interface ProductListType {
  product: ProductType[];
}

function ProductList({ product }: ProductListType) {
  return (
    <StyledProductList>
      {product.map((item, idx) => (
        <ProductItem key={idx} item={item} />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
