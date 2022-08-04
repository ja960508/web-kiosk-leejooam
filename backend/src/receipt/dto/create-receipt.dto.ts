import { PickType } from '@nestjs/mapped-types';
import { Receipt } from '../entities/receipt.entity';

export class CreateReceiptDto extends PickType(Receipt, [
  'paymentMethod',
  'paymentDate',
  'orderNumber',
  'totalAmount',
]) {}
