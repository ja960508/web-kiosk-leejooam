import { Module } from '@nestjs/common';
import { MySQLModule } from '../../config/mysql/mysql.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [MySQLModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
