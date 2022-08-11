import React from 'react';
import { useReceipt } from './hooks';
import { StyledReceiptModal } from './ReceiptModal.style';

interface Props {
  paymentInfo: {
    paymentMethod: string;
    inputAmount: number;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const paymentMethodMap: any = {
  cash: '현금',
  card: '카드',
};

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
  const changes = inputAmount - paymentAmount;

  return (
    <StyledReceiptModal>
      <strong>{`주문번호 ${orderNumber}`}</strong>
      <ul>
        {products.map(({ name, count }, idx) => (
          <li className="product" key={idx}>
            <span>{`${name} ${count}개`}</span>
          </li>
        ))}
      </ul>
      <div className="receipt-meta">{`결제방식: ${paymentMethodMap[paymentMethod]}`}</div>
      <div className="receipt-meta">{`투입금액: ${inputAmount}`}</div>
      <div className="receipt-meta">{changes ? `잔돈: ${changes}원` : ''}</div>
      <div className="receipt-meta payment-amount">{`지불금액: ${paymentAmount}`}</div>
    </StyledReceiptModal>
  );
}

export default ReceiptModal;
