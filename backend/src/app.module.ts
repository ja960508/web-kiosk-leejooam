import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import validationSchema from './config/validationScheme';
import { MySQLModule } from './config/mysql/mysql.module';
import { StoreModule } from './domain/store/store.module';
import { CategoryModule } from './domain/category/category.module';
import { ProductModule } from './domain/product/product.module';
import { ReceiptModule } from './domain/receipt/receipt.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend/build'),
    }),
    MySQLModule,
    StoreModule,
    CategoryModule,
    ProductModule,
    ReceiptModule,
  ],
})
export class AppModule {}
