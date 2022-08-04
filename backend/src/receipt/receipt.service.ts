import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from 'src/store/entities/store.entity';
import { Repository } from 'typeorm';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Receipt } from './entities/receipt.entity';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(Receipt)
    private receiptRepository: Repository<Receipt>,
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async create(createReceiptDto: CreateReceiptDto) {
    const newProduct = this.receiptRepository.create(createReceiptDto);
    await this.receiptRepository.save(newProduct);
  }

  async getReceiptByStoreId(storeId: number) {
    return await this.storeRepository.findOne({
      relations: {
        receipt: true,
      },
      where: {
        id: storeId,
      },
    });
  }

  async update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return await this.receiptRepository.update(id, updateReceiptDto);
  }

  async remove(id: number) {
    return await this.receiptRepository.softDelete({ id });
  }
}
