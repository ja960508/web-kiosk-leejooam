import { Module } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { ReceiptController } from './receipt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipt } from './entities/receipt.entity';
import { Store } from 'src/store/entities/store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receipt, Store])],
  controllers: [ReceiptController],
  providers: [ReceiptService],
})
export class ReceiptModule {}
