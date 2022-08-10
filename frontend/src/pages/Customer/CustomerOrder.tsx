import React, { useContext } from 'react';
import Basket from '../../components/Basket/Basket';
import CategoryList from '../../components/CategoryList/CategoryList';
import Header from '../../components/Header/Header';
import MoveAdminModalTrigger from '../../components/Modal/MoveAdminModal/MoveAdminModalTrigger';
import ProductList from '../../components/ProductList/ProductList';
import { storeContext } from '../../context/StoreProvider';
import { useCategory, useProduct } from '../Admin/hooks';

function CustomerOrder() {
  const { categories, setCategories, selectedCategory, setSelectedCategory } =
    useCategory();
  const { product, setProduct } = useProduct(selectedCategory);
  const { store } = useContext(storeContext);

  return (
    <>
      <Header>
        <h1>어서오세요 고객님.</h1>
        <h2>
          {store.name} {store.branchName}점입니다.
        </h2>
        <div className="header-btns">
          <MoveAdminModalTrigger />
        </div>
      </Header>
      <CategoryList
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        setCategories={setCategories}
      />
      <h3>{selectedCategory.name}</h3>
      <ProductList
        setProduct={setProduct}
        product={product}
        selectedCategory={selectedCategory}
      />
      <Basket />
    </>
  );
}

export default CustomerOrder;
