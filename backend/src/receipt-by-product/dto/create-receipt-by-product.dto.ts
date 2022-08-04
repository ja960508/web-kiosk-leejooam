import { PickType } from '@nestjs/mapped-types';
import { ReceiptByProduct } from '../entities/receipt-by-product.entity';

export class CreateReceiptByProductDto extends PickType(ReceiptByProduct, [
  'count',
  'productId',
  'receiptId',
]) {}
