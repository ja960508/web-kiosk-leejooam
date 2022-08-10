import { useContext, useEffect, useState } from 'react';
import categoryAPI from '../api/categoryAPI';
import { storeContext } from '../context/StoreProvider';
import { CategoryType } from '../types/category';

const useCategory = () => {
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

export default useCategory;
