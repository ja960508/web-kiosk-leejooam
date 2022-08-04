import { Module } from '@nestjs/common';
import { ReceiptByProductService } from './receipt-by-product.service';
import { ReceiptByProductController } from './receipt-by-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiptByProduct } from './entities/receipt-by-product.entity';
import { Product } from 'src/product/entities/product.entity';
import { Receipt } from 'src/receipt/entities/receipt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReceiptByProduct, Product, Receipt])],
  controllers: [ReceiptByProductController],
  providers: [ReceiptByProductService],
})
export class ReceiptByProductModule {}
