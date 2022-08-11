import React from 'react';
import { StyledProductThumbnail } from './ProductThumbnail.style';

interface Props {
  thumbnail: string;
}

function ProductThumbnail({ thumbnail }: Props) {
  return (
    <StyledProductThumbnail>
      <img className="thumbnail-img" src={thumbnail} alt="product_thumbnail" />
    </StyledProductThumbnail>
  );
}

export default ProductThumbnail;
