import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiptByProductDto } from './create-receipt-by-product.dto';

export class UpdateReceiptByProductDto extends PartialType(
  CreateReceiptByProductDto,
) {}
