import React from 'react';

interface Props {
  closeModal: () => void;
  openReceiptModal: (event: React.FormEvent<HTMLFormElement>) => void;
}

function CashModal({ closeModal, openReceiptModal }: Props) {
  const handleCashPayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeModal();
    openReceiptModal(event);
  };
  return (
    <form onSubmit={handleCashPayment}>
      <button type="button">100원</button>
      <button type="button">500원</button>
      <button type="button">1000원</button>
      <button type="button">10000원</button>
      <button type="submit">현금결제</button>
    </form>
  );
}

export default CashModal;
