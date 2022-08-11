import { useContext, useEffect } from 'react';
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

export const useReceipt = ({ paymentInfo }: Props) => {
  const { cart, getTotalPrice } = useContext(cartContext);
  const {
    store: { id: storeId },
  } = useContext(storeContext);

  useEffect(() => {
    const createReceipt = async (receipt: ReceiptAddType) => {
      console.log('call');
      await receiptAPI.addReceipt(receipt);
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
};
