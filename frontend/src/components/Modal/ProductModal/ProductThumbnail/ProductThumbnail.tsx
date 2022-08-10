import React from 'react';
import { StyledProductThumbnail } from './ProductThumbnail.style';

interface Props {
  thumbnail: string;
}

function ProductThumbnail({ thumbnail }: Props) {
  return <StyledProductThumbnail src={thumbnail} alt="product_thumbnail" />;
}

export default ProductThumbnail;
