import { Injectable, OnModuleInit } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import { storeCreateType } from './store.type';
import format from '../utils/format';

@Injectable()
export class StoreService implements OnModuleInit {
  promisePool: any;
  constructor(private mysqlService: MySQLService) {
    this.promisePool = this.mysqlService.pool.promise();
  }
  async onModuleInit() {
    const poolPromise = this.mysqlService.pool.promise();
    await poolPromise.execute(`
      CREATE TABLE IF NOT EXISTS STORE (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20) NOT NULL,
        password VARCHAR(20) NOT NULL,
        branchName VARCHAR(20),
        deletedAt DATETIME
      )
    `);
  }

  async create(store: storeCreateType) {
    console.log(store);
    try {
      const [rows] = await this.promisePool.execute(`
        INSERT INTO STORE (${Object.keys(store).join()})
        VALUES (${Object.values(store).map(format.addQuotesToString).join()})
      `);

      return rows.insertId;
    } catch (e) {
      console.error(e);
    }
  }

  async findById(id: number) {
    try {
      const [rows] = await this.promisePool
        .execute(`SELECT name, branchName FROM STORE
      WHERE id = ${id}`);

      return rows[0];
    } catch (e) {
      console.error(e);
    }
  }
}
