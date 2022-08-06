import { Injectable, OnModuleInit } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';

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
}
