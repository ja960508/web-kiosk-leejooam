import { Injectable } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import format from 'src/domain/utils/format';
import { rTpCreateType } from './receiptToProduct.type';

@Injectable()
export class ReceiptToProductService {
  promisePool: any;
  constructor(private mysqlService: MySQLService) {
    this.promisePool = this.mysqlService.pool.promise();
  }

  async createReceipToProduct(rTpData: rTpCreateType) {
    await this.promisePool.execute(`
    INSERT INTO RECEIPT_TO_PRODUCT (${Object.keys(rTpData).join()})
    VALUES (${Object.values(rTpData).map(format.formatData).join()})
    `);

    return 'create RTP';
  }
}
