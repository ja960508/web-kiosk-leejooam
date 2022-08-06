import { Module } from '@nestjs/common';
import { MySQLModule } from 'src/config/mysql/mysql.module';
import { ReceiptToProductService } from './receiptToProduct.service';

@Module({
  imports: [MySQLModule],
  providers: [ReceiptToProductService],
  exports: [ReceiptToProductService],
})
export class ReceiptToProductModule {}
