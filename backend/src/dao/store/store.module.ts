import { Module } from '@nestjs/common';
import { DaoModule } from '../dao.module';
import { storeService } from './store.service';

@Module({
  imports: [DaoModule],
  providers: [storeService],
})
export class StoreDaoModule {}
