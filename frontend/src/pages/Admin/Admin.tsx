import React, { useContext, useEffect, useState } from 'react';
import { categoryType, getCategoryById } from '../../api/category/request';
import { getProductByCategoryId } from '../../api/product/request';
import Header from '../../components/Header/Header';
import withCheckPermission from '../../components/HOC/withCheckPermission';
import { storeContext } from '../../context/StoreProvider';
import { useNavigate } from '../../lib/Router';
import { setItemToLocalStorage } from '../../lib/storage';
import { CategoryList } from './Admin.style';

function Admin() {
  const [category, setCategory] = useState<categoryType[]>([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { store } = useContext(storeContext);
  const navigate = useNavigate();

  const onLogout = () => {
    setItemToLocalStorage('storeId', '');
    navigate('/');
  };

  useEffect(() => {
    const getCategory = async () => {
      const response = await getCategoryById(store.id);

      setCategory(response);
      setSelectedCategory(response[0]?.id);
    };

    store.id && getCategory();
  }, [store.id]);

  useEffect(() => {
    const getProduct = async () => {
      if (selectedCategory) {
        const response = await getProductByCategoryId(selectedCategory);
        setProduct(response);
      }
    };

    getProduct();
  }, [selectedCategory]);

  return (
    <>
      <Header>
        <h1>안녕하세요 사장님.</h1>
        <h2>
          {store.name} {store.branchName}점입니다.
        </h2>
        <button type="button" onClick={onLogout}>
          로그아웃
        </button>
      </Header>
      <CategoryList>
        {category.map((item, idx) => (
          <li key={idx} onClick={() => setSelectedCategory(item.id)}>
            {item.name}
          </li>
        ))}
      </CategoryList>
    </>
  );
}

export default withCheckPermission(Admin);
