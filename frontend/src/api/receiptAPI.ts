import { ReceiptAddType } from '../types/receipt';
import client from './client';

async function addReceipt(receipt: ReceiptAddType) {
  const { data } = await client.post(`/receipt`, receipt);

  return data;
}

export default { addReceipt };
