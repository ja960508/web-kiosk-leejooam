import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReceiptByProductDto } from './dto/create-receipt-by-product.dto';
import { ReceiptByProduct } from './entities/receipt-by-product.entity';

@Injectable()
export class ReceiptByProductService {
  constructor(
    @InjectRepository(ReceiptByProduct)
    private receiptByProductRepository: Repository<ReceiptByProduct>,
  ) {}

  async create(createReceiptByProductDto: CreateReceiptByProductDto) {
    const newReceiptByProduct = await this.receiptByProductRepository.create(
      createReceiptByProductDto,
    );
    await this.receiptByProductRepository.save(newReceiptByProduct);
  }

  findAll() {
    return `This action returns all receiptByProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receiptByProduct`;
  }
}
