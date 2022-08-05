import { Module } from '@nestjs/common';
import { MySQLModule } from '../../config/mysql/mysql.module';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';

@Module({
  imports: [MySQLModule],
  providers: [StoreService],
  controllers: [StoreController],
})
export class StoreModule {}
