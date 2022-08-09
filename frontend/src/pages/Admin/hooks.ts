import { useContext, useEffect, useState } from 'react';
import categoryAPI from '../../api/categoryAPI';
import { getProductByCategoryId } from '../../api/request';
import { storeContext } from '../../context/StoreProvider';
import { CategoryType } from '../../types/category';
import { ProductType } from '../../types/product';

export const useCategory = (): [
  CategoryType[],
  React.Dispatch<React.SetStateAction<CategoryType[]>>,
  CategoryType,
  React.Dispatch<React.SetStateAction<CategoryType>>,
] => {
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>({
    name: '',
    id: 0,
    storeId: 0,
  });
  const { store } = useContext(storeContext);

  useEffect(() => {
    const getCategory = async () => {
      if (store.id) {
        const response = await categoryAPI.getCategoryById(store.id);
        setCategory(response);
        setSelectedCategory(response[0]);
      }
    };

    getCategory();
  }, [store.id]);

  return [category, setCategory, selectedCategory, setSelectedCategory];
};

export const useProduct = (
  selectedCategory: CategoryType,
): [ProductType[], React.Dispatch<React.SetStateAction<ProductType[]>>] => {
  const [product, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      if (selectedCategory.id) {
        const response = await getProductByCategoryId(selectedCategory.id);
        setProduct(response);
      }
    };

    getProduct();
  }, [selectedCategory]);

  return [product, setProduct];
};
