import React from 'react';

interface ProductType {
  id: number;
  name: string;
  price: string;
  categoryId: number;
  productOption: JSON;
  thumbnail: string | null;
  isPopular: boolean | null;
  isSoldOut: boolean | null;
}

function ProductEdit() {
  return <h1>add</h1>;
}

export default ProductEdit;
