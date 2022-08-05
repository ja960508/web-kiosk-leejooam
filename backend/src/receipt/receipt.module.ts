import { Module } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { ReceiptController } from './receipt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipt } from './entities/receipt.entity';
import { Store } from 'src/store/entities/store.entity';
import { ReceiptByProduct } from 'src/receipt-by-product/entities/receipt-by-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receipt, Store, ReceiptByProduct])],
  controllers: [ReceiptController],
  providers: [ReceiptService],
})
export class ReceiptModule {}
