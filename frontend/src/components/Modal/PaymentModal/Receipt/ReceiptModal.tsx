import React from 'react';
import { useReceipt } from './hooks';
import { StyledReceiptModal } from './ReceiptModal.style';

interface Props {
  paymentInfo: {
    paymentMethod: string;
    inputAmount: number;
  };
}

function ReceiptModal({ paymentInfo }: Props) {
  const {
    receipt: {
      orderNumber,
      products,
      paymentAmount,
      paymentMethod,
      inputAmount,
    },
  } = useReceipt({ paymentInfo });

  return (
    <StyledReceiptModal>
      <strong>{`주문번호 ${orderNumber}`}</strong>
      <ul>
        {products.map(({ name, count }, idx) => (
          <li key={idx}>
            <span>{name}</span>
            <span>{count}</span>
          </li>
        ))}
      </ul>
      <div>{`결제방식 ${paymentMethod}`}</div>
      <div>{`투입금액 ${inputAmount}`}</div>
      <div>{`총 결제금액 ${paymentAmount}`}</div>
    </StyledReceiptModal>
  );
}

export default ReceiptModal;
