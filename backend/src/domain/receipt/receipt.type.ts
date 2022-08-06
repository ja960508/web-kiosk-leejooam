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
  cashAmount?: number;
  paymentDate: string;
  products: productType[];
  storeId: number;
}

export interface receiptDataType {
  paymentMethod: paymentMethodType;
  cashAmount?: number;
  paymentDate: string;
  storeId: number;
  orderNumber: number;
}
