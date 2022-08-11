import React, { useContext } from 'react';
import Cart from '../../components/Cart/Cart';
import CategoryList from '../../components/CategoryList/CategoryList';
import Header from '../../components/Header/Header';
import MoveAdminModalTrigger from '../../components/Modal/MoveAdminModal/MoveAdminModalTrigger';
import ProductList from '../../components/ProductList/ProductList';
import { storeContext } from '../../context/StoreProvider';
import { useCategory, useProduct } from '../../hooks';
import { SectionContainer } from '../../styles/global';

function CustomerOrder() {
  const { categories, setCategories, selectedCategory, setSelectedCategory } =
    useCategory();
  const { products, setProducts } = useProduct(selectedCategory);
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
      <SectionContainer>
        <CategoryList
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setCategories={setCategories}
          selectedCategory={selectedCategory}
        />
        <ProductList
          setProducts={setProducts}
          products={products}
          selectedCategory={selectedCategory}
        />
      </SectionContainer>

      <Cart />
    </>
  );
}

export default CustomerOrder;
