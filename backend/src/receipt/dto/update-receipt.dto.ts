import { OmitType, PartialType } from '@nestjs/mapped-types';
import { Receipt } from '../entities/receipt.entity';

export class UpdateReceiptDto extends PartialType(
  OmitType(Receipt, ['id', 'store']),
) {}
