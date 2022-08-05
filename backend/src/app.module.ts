import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import validationSchema from './config/validationScheme';
// import { StoreModule } from './store/store.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ReceiptModule } from './receipt/receipt.module';
import { ReceiptByProductModule } from './receipt-by-product/receipt-by-product.module';
import { DaoModule } from './dao/dao.module';
import { StoreDaoModule } from './dao/store/store.module';
import { categoryDaoModule } from './dao/category/category.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       envFilePath: '.env',
//       validationSchema,
//     }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         type: 'mysql',
//         host: configService.get('DATABASE_HOST'),
//         port: configService.get<number>('DATABASE_PORT'),
//         username: configService.get('DATABASE_USERNAME'),
//         password: configService.get('DATABASE_PASSWORD'),
//         database: configService.get('DATABASE_DATABASE'),
//         entities: [],
//         autoLoadEntities: true,
//         synchronize: true,
//         logging: true,
//       }),
//       inject: [ConfigService],
//     }),
//     StoreModule,
//     CategoryModule,
//     ProductModule,
//     ReceiptModule,
//     ReceiptByProductModule,
//   ],
// })
// export class AppModule {}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema,
    }),
    DaoModule,
    StoreDaoModule,
    categoryDaoModule,
  ],
})
export class AppModule {}
