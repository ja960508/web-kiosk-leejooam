import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2';

@Injectable()
export class MySQLService implements OnModuleInit {
  pool: mysql.Pool;
  constructor(private configService: ConfigService) {
    this.pool = mysql.createPool({
      host: configService.get('DATABASE_HOST'),
      port: configService.get<number>('DATABASE_PORT'),
      user: configService.get('DATABASE_USERNAME'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_DATABASE'),
    });
  }

  async onModuleInit() {
    const poolPromise = this.pool.promise();

    await poolPromise.execute(`
      CREATE TABLE IF NOT EXISTS STORE (
        id INT PRIMARY KEY AUTO_INCREMENT,
        storeId VARCHAR(30) NOT NULL,
        name VARCHAR(20) NOT NULL,
        password VARCHAR(20) NOT NULL,
        branchName VARCHAR(20),
        deletedAt DATETIME
      )
    `);

    await poolPromise.execute(`
    CREATE TABLE IF NOT EXISTS CATEGORY (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(20) NOT NULL,
      storeId INT,
      deletedAt DATETIME,
      FOREIGN KEY (storeId) REFERENCES STORE(id)
    )
  `);

    await poolPromise.execute(`
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

    await poolPromise.execute(`
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

    await poolPromise.execute(`
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
}
