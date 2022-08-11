import React, { useContext, useEffect } from 'react';
import { Logout, Store } from '../../assets/icons';
import CategoryList from '../../components/CategoryList/CategoryList';
import Header from '../../components/Header/Header';
import withCheckPermission from '../../components/HOC/withCheckPermission';
import ProductList from '../../components/ProductList/ProductList';
import { adminAuthorityContext } from '../../context/AdminAuthorityProvider';
import { storeContext } from '../../context/StoreProvider';
import { useCategory, useProduct } from '../../hooks';
import { useNavigate } from '../../lib/Router';
import { setItemToLocalStorage } from '../../lib/storage';
import { SectionContainer } from '../../styles/global';

function Admin() {
  const { categories, setCategories, selectedCategory, setSelectedCategory } =
    useCategory();
  const { products, setProducts } = useProduct(selectedCategory);
  const { store } = useContext(storeContext);
  const { changeAdminAuthority } = useContext(adminAuthorityContext);
  const navigate = useNavigate();

  const onLogout = () => {
    setItemToLocalStorage('storeId', '');
    navigate('/');
  };

  const openStore = () => {
    navigate('/customer-order');
  };

  useEffect(() => {
    changeAdminAuthority(true);

    return () => {
      changeAdminAuthority(false);
    };
  }, [changeAdminAuthority]);

  return (
    <>
      <Header>
        <h1>안녕하세요 사장님.</h1>
        <h2>
          {store.name} {store.branchName}점입니다.
        </h2>
        <div className="header-btns">
          <button type="button" className="open-store" onClick={openStore}>
            <Store />
            장사 시작
          </button>
          <button type="button" className="logout" onClick={onLogout}>
            <Logout />
            로그아웃
          </button>
        </div>
      </Header>
      <SectionContainer>
        <CategoryList
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setCategories={setCategories}
        />
        <h3>{selectedCategory.name}</h3>
        <ProductList
          setProducts={setProducts}
          products={products}
          selectedCategory={selectedCategory}
        />
      </SectionContainer>
    </>
  );
}

export default withCheckPermission(Admin);
