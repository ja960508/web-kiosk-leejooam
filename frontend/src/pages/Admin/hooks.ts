import { useContext, useEffect, useState } from 'react';
import categoryAPI from '../../api/categoryAPI';
import productAPI from '../../api/productAPI';
import { storeContext } from '../../context/StoreProvider';
import { CategoryType } from '../../types/category';
import { ProductType } from '../../types/product';

export const useCategory = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>({
    name: '',
    id: 0,
    storeId: 0,
  });
  const { store } = useContext(storeContext);

  useEffect(() => {
    const getCategories = async () => {
      if (store.id) {
        const response = await categoryAPI.getCategoriesById(store.id);
        setCategories(response);
        setSelectedCategory(response[0]);
      }
    };

    getCategories();
  }, [store.id]);

  return { categories, setCategories, selectedCategory, setSelectedCategory };
};

export const useProduct = (selectedCategory: CategoryType) => {
  const [product, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      if (selectedCategory.id) {
        const response = await productAPI.getProductByCategoryId(
          selectedCategory.id,
        );
        setProduct(response);
      }
    };

    getProduct();
  }, [selectedCategory]);

  return { product, setProduct };
};
