import { useContext, useEffect, useState } from 'react';
import { getCategoryById } from '../../api/category/request';
import { getProductByCategoryId } from '../../api/product/request';
import { storeContext } from '../../context/StoreProvider';
import { CategoryType } from '../../types/category';
import { ProductType } from '../../types/product';

export const useCategory = (): [
  CategoryType[],
  CategoryType,
  React.Dispatch<React.SetStateAction<CategoryType>>,
] => {
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>({
    name: '',
    id: '',
    storeId: '',
  });
  const { store } = useContext(storeContext);

  useEffect(() => {
    const getCategory = async () => {
      if (store.id) {
        const response = await getCategoryById(store.id);
        setCategory(response);
        setSelectedCategory(response[0]);
      }
    };

    getCategory();
  }, [store.id]);

  return [category, selectedCategory, setSelectedCategory];
};

export const useProduct = (selectedCategory: CategoryType): ProductType[] => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      if (selectedCategory.id) {
        const response = await getProductByCategoryId(selectedCategory.id);
        setProduct(response);
      }
    };

    getProduct();
  }, [selectedCategory]);

  return product;
};
