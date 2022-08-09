import React from 'react';
import { CategoryType } from '../../types/category';
import { ProductType } from '../../types/product';
import ProductAddModalTrigger from '../Modal/ProductModal/ProductAddModalTrigger';
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
  return (
    <StyledProductList>
      <ProductAddModalTrigger
        setProduct={setProduct}
        categoryId={selectedCategory.id}
      />
      <Slider offset={9} line={3}>
        {product.map((item, idx) => (
          <ProductItem key={idx} item={item} setProduct={setProduct} />
        ))}
      </Slider>
    </StyledProductList>
  );
}

export default ProductList;
