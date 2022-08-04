import { Module } from '@nestjs/common';
import { ReceiptByProductService } from './receipt-by-product.service';
import { ReceiptByProductController } from './receipt-by-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiptByProduct } from './entities/receipt-by-product.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReceiptByProduct, Product])],
  controllers: [ReceiptByProductController],
  providers: [ReceiptByProductService],
})
export class ReceiptByProductModule {}
