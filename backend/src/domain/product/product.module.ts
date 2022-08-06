import { Module } from '@nestjs/common';
import { MySQLModule } from 'src/config/mysql/mysql.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [MySQLModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
