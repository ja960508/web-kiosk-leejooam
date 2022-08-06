import { Injectable, OnModuleInit } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import format from 'src/domain/utils/format';
import { rTpCreateType } from './receiptToProduct.type';

@Injectable()
export class ReceiptToProductService implements OnModuleInit {
  promisePool: any;
  constructor(private mysqlService: MySQLService) {
    this.promisePool = this.mysqlService.pool.promise();
  }

  async onModuleInit() {
    await this.promisePool.execute(`
    CREATE TABLE IF NOT EXISTS RECEIPT_TO_PRODUCT (
      receiptId INT,
      productId INT,
      count INT,
      FOREIGN KEY (receiptId) REFERENCES RECEIPT(id),
      FOREIGN KEY (productId) REFERENCES PRODUCT(id),
      PRIMARY KEY (receiptId, productId)
    )
  `);
  }

  async createReceipToProduct(rTpData: rTpCreateType) {
    await this.promisePool.execute(`
    INSERT INTO RECEIPT_TO_PRODUCT (${Object.keys(rTpData).join()})
    VALUES (${Object.values(rTpData).map(format.formatData).join()})
    `);

    return 'create RTP';
  }
}
