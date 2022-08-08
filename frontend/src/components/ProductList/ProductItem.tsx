import React from 'react';
import { ProductType } from '../../types/product';

interface ProductItemType {
  item: ProductType;
}

function ProductItem({ item }: ProductItemType) {
  return <li>{item.name}</li>;
}

export default ProductItem;
