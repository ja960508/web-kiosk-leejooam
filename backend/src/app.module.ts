import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import validationSchema from './config/validationScheme';
import { MySQLModule } from './config/mysql/mysql.module';
import { StoreModule } from './domain/store/store.module';
import { CategoryModule } from './domain/category/category.module';
import { ProductModule } from './domain/product/product.module';
import { ReceiptModule } from './domain/receipt/receipt.module';
import mocking from './mocking';
import { StoreService } from './domain/store/store.service';
import { CategoryService } from './domain/category/category.service';
import { ProductService } from './domain/product/product.service';

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
    ReceiptModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly storeService: StoreService,
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
  ) {}

  async onModuleInit() {
    const { stores, categories, products } = mocking();

    for (const store of stores) {
      await this.storeService.createStore(store);
    }

    for (const category of categories) {
      await this.categoryService.createCategory(category);
    }

    for (const product of products) {
      await this.productService.createProduct(product);
    }
  }
}
