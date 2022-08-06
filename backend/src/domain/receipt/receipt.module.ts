import { Module } from '@nestjs/common';
import { MySQLModule } from 'src/config/mysql/mysql.module';
import { ReceiptController } from './receipt.controller';
import { ReceiptService } from './receipt.service';

@Module({
  imports: [MySQLModule],
  providers: [ReceiptService],
  controllers: [ReceiptController],
})
export class ReceiptModule {}
