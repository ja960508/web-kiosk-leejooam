const enum paymentMethodType {
  card = 'card',
  cash = 'cash',
}

export interface productType {
  productId: number;
  count: number;
}

export interface receiptCreateType {
  paymentMethod: paymentMethodType;
  inputAmount: number;
  paymentAmount: number;
  products: productType[];
  storeId: number;
}

export interface receiptDataType {
  paymentMethod: paymentMethodType;
  paymentDate: string;
  inputAmount: number;
  storeId: number;
  orderNumber: number;
}
