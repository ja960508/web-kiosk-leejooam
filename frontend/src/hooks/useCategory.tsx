import { useContext, useEffect, useState } from 'react';
import categoryAPI from '../api/categoryAPI';
import { storeContext } from '../context/StoreProvider';
import { CategoryType, initialCategoryValue } from '../types/category';

const useCategory = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>({
    ...initialCategoryValue,
  });
  const { store } = useContext(storeContext);

  useEffect(() => {
    const getCategories = async () => {
      if (store.id) {
        const response = await categoryAPI.getCategoriesById(store.id);
        setCategories(response);
        setSelectedCategory(response[0] || { ...initialCategoryValue });
      }
    };

    getCategories();
  }, [store.id]);

  return { categories, setCategories, selectedCategory, setSelectedCategory };
};

export default useCategory;
