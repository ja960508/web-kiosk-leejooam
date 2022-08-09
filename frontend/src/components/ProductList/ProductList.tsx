import React from 'react';
import { ProductType } from '../../types/product';
import Slider from '../Slider/Slider';
import { StyledProductList } from './Product.style';
import ProductItem from './ProductItem';

interface ProductListType {
  product: ProductType[];
}

function ProductList({ product }: ProductListType) {
  return (
    <StyledProductList>
      <Slider offset={9} line={3}>
        {product.map((item, idx) => (
          <ProductItem key={idx} item={item} />
        ))}
      </Slider>
    </StyledProductList>
  );
}

export default ProductList;
