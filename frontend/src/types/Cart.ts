import { ProductType } from './product';

export interface CartType {
  product: ProductType;
  options: {
    quantity: number;
    [key: string]: string | number;
  };
}
