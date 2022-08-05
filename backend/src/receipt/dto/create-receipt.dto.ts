import { PickType } from '@nestjs/mapped-types';
import { Receipt } from '../entities/receipt.entity';

export class OrdersProduct {
  productId: number;
  count: number;
}

export class CreateReceiptDto extends PickType(Receipt, [
  'paymentMethod',
  'paymentDate',
  'orderNumber',
  'totalAmount',
]) {
  products: OrdersProduct[];
}
