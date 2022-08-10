import React, { useContext } from 'react';
import { adminAuthorityContext } from '../../context/AdminAuthorityProvider';
import { ProductType } from '../../types/product';
import { useModal } from '../Modal/hooks';
import Modal from '../Modal/Modal';
import ProductAddBasketModal from '../Modal/ProductModal/ProductAddBasketModal';
import ProductDeleteModalTrigger from '../Modal/ProductModal/ProductDeleteModalTrigger';

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
    <li onClick={(event) => handleProductClick(event)}>
      <ProductDeleteModalTrigger setProducts={setProducts} product={product} />
      <div className="extra-info">
        {!!product.isPopular && <span>인기</span>}
        {!!product.isSoldOut && <span>완판</span>}
      </div>
      <img src={product.thumbnail} alt="product_thumbnail" />
      <div>{product.name}</div>
      <div>{product.price}원</div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <ProductAddBasketModal closeModal={closeModal} product={product} />
      </Modal>
    </li>
  );
}

export default ProductItem;
