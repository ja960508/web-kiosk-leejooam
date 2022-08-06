import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import validationSchema from './config/validationScheme';
import { MySQLModule } from './config/mysql/mysql.module';
import { StoreModule } from './domain/store/store.module';
import { CategoryModule } from './domain/category/category.module';
import { ProductModule } from './domain/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema,
    }),
    MySQLModule,
    StoreModule,
    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}
