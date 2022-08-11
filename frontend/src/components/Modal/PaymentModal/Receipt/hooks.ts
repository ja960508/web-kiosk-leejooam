import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../../../context/CartProvider';
import { storeContext } from '../../../../context/StoreProvider';
import receiptAPI from '../../../../api/receiptAPI';
import { ReceiptAddType } from '../../../../types/receipt';

interface Props {
  paymentInfo: {
    paymentMethod: string;
    inputAmount: number;
  };
}

interface ReceiptInfoType {
  paymentMethod: string;
  orderNumber: number;
  paymentAmount: number;
  inputAmount: number;
  name: string;
  count: number;
}

interface ReceiptProductsType {
  name: string;
  count: number;
}

interface ReceiptType {
  paymentMethod: string;
  orderNumber: number;
  paymentAmount: number;
  inputAmount: number;
  products: ReceiptProductsType[];
}

const initialReceiptValue = {
  paymentMethod: '',
  orderNumber: 0,
  paymentAmount: 0,
  inputAmount: 0,
  products: [],
};

export const useReceipt = ({ paymentInfo }: Props) => {
  const { cart, getTotalPrice } = useContext(cartContext);
  const {
    store: { id: storeId },
  } = useContext(storeContext);
  const [receipt, setReceipt] = useState<ReceiptType>({
    ...initialReceiptValue,
  });

  useEffect(() => {
    const createReceipt = async (receipt: ReceiptAddType) => {
      const receiptInfo: ReceiptInfoType[] = await receiptAPI.addReceipt(
        receipt,
      );
      const { paymentMethod, orderNumber, inputAmount, paymentAmount } =
        receiptInfo[0];
      const products = receiptInfo.map(({ name, count }) => ({ name, count }));

      setReceipt({
        paymentMethod,
        orderNumber,
        inputAmount,
        paymentAmount,
        products,
      });
    };

    const products = cart.map((cartItem) => ({
      productId: cartItem.product.id,
      count: cartItem.quantity,
    }));

    const { paymentMethod, inputAmount } = paymentInfo;
    const receipt = {
      paymentMethod,
      inputAmount: inputAmount || getTotalPrice(),
      paymentAmount: getTotalPrice(),
      products,
      storeId,
    };

    createReceipt(receipt);
  }, [getTotalPrice, paymentInfo, storeId, cart]);

  return { receipt };
};
