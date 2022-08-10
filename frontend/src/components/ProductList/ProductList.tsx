import React from 'react';
import { CategoryType } from '../../types/category';
import { ProductType } from '../../types/product';
import ProductAddModalTrigger from '../Modal/ProductModal/ProductAddModalTrigger';
import Slider from '../Slider/Slider';
import { StyledProductList } from './Product.style';
import ProductItem from './ProductItem';

interface ProductListType {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  selectedCategory: CategoryType;
}

function ProductList({
  products,
  setProducts,
  selectedCategory,
}: ProductListType) {
  return (
    <StyledProductList>
      <ProductAddModalTrigger
        setProducts={setProducts}
        selectedCategoryId={selectedCategory.id}
      />
      <Slider offset={9} line={3}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            setProducts={setProducts}
          />
        ))}
      </Slider>
    </StyledProductList>
  );
}

export default ProductList;
