import React, { useContext } from 'react';
import { adminAuthorityContext } from '../../context/AdminAuthorityProvider';
import { ProductType } from '../../types/product';
import { useModal } from '../Modal/hooks';
import Modal from '../Modal/Modal';
import ProductAddBasketModal from '../Modal/ProductModal/ProductAddBasketModal';
import ProductDeleteModalTrigger from '../Modal/ProductModal/ProductDeleteModalTrigger';

interface ProductItemType {
  item: ProductType;
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

function ProductItem({ item, setProduct }: ProductItemType) {
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
      <ProductDeleteModalTrigger setProduct={setProduct} product={item} />
      <div className="extra-info">
        {!!item.isPopular && <span>인기</span>}
        {!!item.isSoldOut && <span>완판</span>}
      </div>
      <img src={item.thumbnail} alt="product_thumbnail" />
      <div>{item.name}</div>
      <div>{item.price}원</div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <ProductAddBasketModal closeModal={closeModal} product={item} />
      </Modal>
    </li>
  );
}

export default ProductItem;
