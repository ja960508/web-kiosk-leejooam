interface ReceiptProductType {
  productId: number;
  count: number;
}

export interface ReceiptAddType {
  paymentMethod: string;
  inputAmount: number;
  paymentAmount: number;
  products: ReceiptProductType[];
  storeId: number;
}
