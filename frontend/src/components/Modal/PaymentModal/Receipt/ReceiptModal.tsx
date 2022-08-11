import React from 'react';
import { useReceipt } from './hooks';

interface Props {
  paymentInfo: {
    paymentMethod: string;
    inputAmount: number;
  };
}

function ReceiptModal({ paymentInfo }: Props) {
  const receipt = useReceipt({ paymentInfo });

  return <div>ReceiptModal</div>;
}

export default ReceiptModal;
