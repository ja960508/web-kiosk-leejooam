import { Injectable, OnModuleInit } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import { storeCreateType } from './store.type';

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
        branch_name VARCHAR(20),
        deleted_at DATETIME
      )
    `);
  }

  async create(store: storeCreateType) {
    console.log(store);
    try {
      const [rows] = await this.promisePool.execute(`
        INSERT INTO STORE (name, password, branch_name)
        VALUES ("매머드 커피", "1235", "잠실")
      `);
    } catch (e) {
      console.error(e);
    }
  }
}
