import { Module } from '@nestjs/common';
import { MySQLModule } from '../../config/mysql/mysql.module';

@Module({
  imports: [MySQLModule],
})
export class categoryDaoModule {}
