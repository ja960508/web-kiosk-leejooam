import { Module } from '@nestjs/common';
import { DaoModule } from '../dao.module';

@Module({
  imports: [DaoModule],
})
export class categoryDaoModule {}
