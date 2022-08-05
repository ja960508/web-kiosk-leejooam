import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DaoService } from './dao.service';

@Module({
  imports: [ConfigModule],
  providers: [DaoService],
  exports: [DaoService],
})
export class DaoModule {}
