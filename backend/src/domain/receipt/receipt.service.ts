import { Injectable, OnModuleInit } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import dateUtils from '../utils/date.utils';
import format from '../utils/format';
import { receiptCreateType, receiptDataType } from './receipt.type';

@Injectable()
export class ReceiptService implements OnModuleInit {
  promisePool: any;
  constructor(private mysqlService: MySQLService) {
    this.promisePool = this.mysqlService.pool.promise();
  }
  async onModuleInit() {
    await this.promisePool.execute(`
      CREATE TABLE IF NOT EXISTS RECEIPT (
        id INT PRIMARY KEY AUTO_INCREMENT,
        paymentMethod ENUM('card', 'cash') NOT NULL,
        cashAmount DECIMAL(10, 0),
        paymentAmount DECIMAL(10, 0) NOT NULL,
        paymentDate DATE NOT NULL,
        orderNumber INT NOT NULL,
        storeId INT,
        deletedAt DATETIME,
        FOREIGN KEY (storeId) REFERENCES STORE(id)
      )
    `);
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

  async createReceipt(receipt: receiptCreateType) {
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

      return rows.insertId;
    } catch (e) {
      console.error(e);
    }
  }
}
