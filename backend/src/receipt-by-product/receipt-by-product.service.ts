import { Injectable } from '@nestjs/common';
import { CreateReceiptByProductDto } from './dto/create-receipt-by-product.dto';
import { UpdateReceiptByProductDto } from './dto/update-receipt-by-product.dto';

@Injectable()
export class ReceiptByProductService {
  create(createReceiptByProductDto: CreateReceiptByProductDto) {
    return 'This action adds a new receiptByProduct';
  }

  findAll() {
    return `This action returns all receiptByProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receiptByProduct`;
  }

  update(id: number, updateReceiptByProductDto: UpdateReceiptByProductDto) {
    return `This action updates a #${id} receiptByProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} receiptByProduct`;
  }
}
