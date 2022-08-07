import { Injectable } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import { storeCreateType, storeUpdateType } from './store.type';
import format from '../utils/format';

@Injectable()
export class StoreService {
  promisePool: any;
  constructor(private mysqlService: MySQLService) {
    this.promisePool = this.mysqlService.pool.promise();
  }

  async create(store: storeCreateType) {
    try {
      const [rows] = await this.promisePool.execute(`
        INSERT INTO STORE (${Object.keys(store).join()})
        VALUES (${Object.values(store).map(format.formatData).join()})
      `);

      return rows.insertId;
    } catch (e) {
      console.error(e);
    }
  }

  async findById(storeId: string) {
    try {
      const [rows] = await this.promisePool
        .execute(`SELECT name, branchName FROM STORE
      WHERE storeId = ${storeId}`);

      return rows[0];
    } catch (e) {
      console.error(e);
    }
  }

  async updateById(id: number, store: storeUpdateType) {
    try {
      const options = Object.entries(store)
        .map(([key, value]) => `${key} = ${format.formatData(value)}`)
        .join();

      const [rows] = await this.promisePool.execute(`
        UPDATE STORE SET ${options} 
        WHERE id = ${id}
        `);

      return rows;
    } catch (e) {
      console.error(e);
    }
  }
}
