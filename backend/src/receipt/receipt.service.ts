import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceiptByProduct } from 'src/receipt-by-product/entities/receipt-by-product.entity';
import { Store } from 'src/store/entities/store.entity';
import { Repository } from 'typeorm';
import { CreateReceiptDto, OrdersProduct } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Receipt } from './entities/receipt.entity';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(Receipt)
    private receiptRepository: Repository<Receipt>,
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
    @InjectRepository(ReceiptByProduct)
    private receiptByProductRepository: Repository<ReceiptByProduct>,
  ) {}

  createOrderList = (products: OrdersProduct[], receiptId: number) => {
    return products.map(async (item) => {
      console.log(item);
      console.log(Object.entries(item));
      const [productId, count] = Object.entries(item)[0].map(Number);
      console.log(productId, count);
      const newReceiptByProduct = await this.receiptByProductRepository.create({
        count,
        productId,
        receiptId,
      });
      await this.receiptByProductRepository.save(newReceiptByProduct);
    });
  };

  async create(createReceiptDto: CreateReceiptDto) {
    const newReceipt = this.receiptRepository.create(createReceiptDto);
    await this.receiptRepository.save(newReceipt);

    const { id: receiptId } = newReceipt;
    const { products } = createReceiptDto;

    await Promise.all(this.createOrderList(products, receiptId));
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
