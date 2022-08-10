import { useEffect, useState } from 'react';
import { CategoryType } from '../types/category';
import { ProductType } from '../types/product';
import productAPI from '../api/productAPI';

const useProduct = (selectedCategory: CategoryType) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      if (selectedCategory.id) {
        const response = await productAPI.getProductsByCategoryId(
          selectedCategory.id,
        );
        setProducts(response);
      }
    };

    getProduct();
  }, [selectedCategory]);

  return { products, setProducts };
};

export default useProduct;
