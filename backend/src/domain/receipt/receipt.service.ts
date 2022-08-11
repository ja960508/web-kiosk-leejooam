import { Injectable } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import dateUtils from '../utils/date.utils';
import format from '../utils/format';
import {
  productType,
  receiptCreateType,
  receiptDataType,
} from './receipt.type';
import { ReceiptToProductService } from './receiptToProduct/receiptToProduct.service';

@Injectable()
export class ReceiptService {
  promisePool: any;
  constructor(
    private mysqlService: MySQLService,
    private rTpService: ReceiptToProductService,
  ) {
    this.promisePool = this.mysqlService.pool.promise();
  }

  async getOrderNumber() {
    const date = dateUtils.getCurrentDate();

    try {
      const [count] = await this.promisePool.execute(`
      SELECT COUNT(*) as count FROM RECEIPT
      WHERE DATE(paymentDate) = "${date}"
    `);

      return count[0].count + 1;
    } catch (e) {
      console.error(e);
    }
  }

  async createRTP(products: productType[], receiptId: number) {
    try {
      const rTpList = products.map(async ({ productId, count }) => {
        await this.rTpService.createReceipToProduct({
          productId,
          count,
          receiptId,
        });
      });

      await Promise.all(rTpList);

      return 'CREATE RTP SUCCESS';
    } catch (e) {
      console.error(e);
    }
  }

  async createReceipt(receipt: receiptCreateType): Promise<number> {
    const { products, ...otherInfo } = receipt;
    const receiptData: receiptDataType = {
      ...otherInfo,
      orderNumber: -1,
      paymentDate: dateUtils.getCurrentDate(),
    };
    const orderNumber = await this.getOrderNumber();
    receiptData.orderNumber = orderNumber;

    try {
      const [rows] = await this.promisePool.execute(`
        INSERT INTO RECEIPT (${Object.keys(receiptData).join()})
        VALUES (${Object.values(receiptData).map(format.formatData).join()})
      `);

      await this.createRTP(products, rows.insertId);

      return rows.insertId;
    } catch (e) {
      console.error(e);
    }
  }

  async getReceiptByStoreId(storeId: number) {
    try {
      const [rows] = await this.promisePool.execute(`SELECT * FROM RECEIPT
      WHERE storeId = ${storeId}`);

      return rows;
    } catch (e) {
      console.error(e);
    }
  }

  async getReceiptInfoById(id: number) {
    try {
      const [rows] = await this.promisePool
        .execute(`SELECT R.paymentMethod, R.orderNumber, R.paymentAmount, R.inputAmount, P.name, RTP.count FROM RECEIPT as R
      LEFT JOIN RECEIPT_TO_PRODUCT as RTP
      ON RTP.receiptId = ${id}
      LEFT JOIN PRODUCT as P
      ON P.id = RTP.productId
      WHERE R.id = ${id}`);

      return rows;
    } catch (e) {
      console.error(e);
    }
  }
}
