import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Store } from 'src/store/entities/store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Store])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
