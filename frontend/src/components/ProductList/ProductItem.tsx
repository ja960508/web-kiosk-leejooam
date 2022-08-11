import React, { useContext } from 'react';
import { adminAuthorityContext } from '../../context/AdminAuthorityProvider';
import { ProductType } from '../../types/product';
import { useModal } from '../Modal/hooks';
import Modal from '../Modal/Modal';
import ProductAddCartModal from '../Modal/ProductModal/ProductAddCartModal';
import ProductDeleteModalTrigger from '../Modal/ProductModal/ProductDeleteModalTrigger';
import { StyledProductItem } from './Product.style';

interface ProductItemType {
  product: ProductType;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

function ProductItem({ product, setProducts }: ProductItemType) {
  const { adminAuthority } = useContext(adminAuthorityContext);
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleProductClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    if (adminAuthority) return;

    openModal(event);
  };

  return (
    <StyledProductItem onClick={(event) => handleProductClick(event)}>
      <ProductDeleteModalTrigger setProducts={setProducts} product={product} />
      <div className="extra-info">
        {!!product.isPopular && <span>인기</span>}
        {!!product.isSoldOut && <span>완판</span>}
      </div>
      <img src={product.thumbnail} alt="product_thumbnail" />
      <div className="product-name">{product.name}</div>
      <div className="product-price">{`${product.price} 원`}</div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <ProductAddCartModal closeModal={closeModal} product={product} />
      </Modal>
    </StyledProductItem>
  );
}

export default ProductItem;
