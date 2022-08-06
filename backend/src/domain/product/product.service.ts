import { Injectable, OnModuleInit } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import format from '../utils/format';
import { productCreateType } from './product.type';

@Injectable()
export class ProductService implements OnModuleInit {
  promisePool: any;
  constructor(private mysqlService: MySQLService) {
    this.promisePool = this.mysqlService.pool.promise();
  }
  async onModuleInit() {
    await this.promisePool.execute(`
      CREATE TABLE IF NOT EXISTS PRODUCT (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20) NOT NULL,
        price DECIMAL(10, 0) NOT NULL,
        categoryId INT,
        productOption json,
        thumbnail VARCHAR(255),
        isPopular BOOLEAN,
        isSoldOut BOOLEAN,
        deletedAt DATETIME,
        FOREIGN KEY (categoryId) REFERENCES CATEGORY(id)
      )
    `);
  }

  async createProduct(product: productCreateType) {
    try {
      const [rows] = await this.promisePool.execute(`
        INSERT INTO PRODUCT (${Object.keys(product).join()})
        VALUES (${Object.values(product).map(format.formatData).join()})
      `);

      return rows.insertId;
    } catch (e) {
      console.error(e);
    }
  }
}
