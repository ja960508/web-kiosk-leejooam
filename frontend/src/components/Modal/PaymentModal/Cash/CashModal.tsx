import React, { useContext, useState } from 'react';
import { cartContext } from '../../../../context/CartProvider';
import { StyledCashModal } from './CashModal.style';

interface Props {
  closeModal: () => void;
  openReceiptModal: (paymentMethod: string, inputAmount: number) => void;
}

function CashModal({ closeModal, openReceiptModal }: Props) {
  const { getTotalPrice } = useContext(cartContext);
  const [insertedCash, setInsertedCash] = useState(0);
  const totalPrice = getTotalPrice();

  const handleCashPayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeModal();
    openReceiptModal('cash', insertedCash);
  };

  const handleInsertCash = (cash: number) => () => {
    setInsertedCash((prev) => prev + cash);
  };

  return (
    <StyledCashModal onSubmit={handleCashPayment}>
      <strong>현금을 투입해주세요.</strong>
      <div className="cash-select">
        <button onClick={handleInsertCash(100)} type="button">
          100원
        </button>
        <button onClick={handleInsertCash(500)} type="button">
          500원
        </button>
        <button onClick={handleInsertCash(1000)} type="button">
          1000원
        </button>
        <button onClick={handleInsertCash(10000)} type="button">
          10000원
        </button>
      </div>
      <div>
        <div>{`${insertedCash}원`}</div>
        <div>{`${totalPrice}원`}</div>
      </div>
      <button
        className="submit-btn"
        type="submit"
        disabled={insertedCash < totalPrice}
      >
        현금결제
      </button>
    </StyledCashModal>
  );
}

export default CashModal;
