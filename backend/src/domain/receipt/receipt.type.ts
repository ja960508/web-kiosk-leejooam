const enum paymentMethodType {
  card = 'card',
  cash = 'cash',
}

interface product {
  [id: number]: number;
}

export interface receiptCreateType {
  paymentMethod: paymentMethodType;
  cashAmount?: number;
  paymentDate: string;
  products: product[];
  storeId: number;
}

export interface receiptDataType {
  paymentMethod: paymentMethodType;
  cashAmount?: number;
  paymentDate: string;
  storeId: number;
  orderNumber: number;
}
