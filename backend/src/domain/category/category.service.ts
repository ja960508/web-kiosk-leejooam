import { Injectable, OnModuleInit } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import format from '../utils/format';
import { categoryCreateType, categoryUpdateType } from './category.type';

@Injectable()
export class CategoryService implements OnModuleInit {
  promisePool: any;
  constructor(private mysqlService: MySQLService) {
    this.promisePool = this.mysqlService.pool.promise();
  }
  async onModuleInit() {
    const poolPromise = this.mysqlService.pool.promise();
    await poolPromise.execute(`
      CREATE TABLE IF NOT EXISTS CATEGORY (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20) NOT NULL,
        storeId INT,
        deletedAt DATETIME,
        FOREIGN KEY (storeId) REFERENCES STORE(id)
      )
    `);
  }

  async getCategoryByStoreId(stordId: number) {
    try {
      const [rows] = await this.promisePool.execute(`SELECT * FROM CATEGORY
      WHERE storeId = ${stordId}`);

      return rows;
    } catch (e) {
      console.error(e);
    }
  }

  async createCategory(category: categoryCreateType) {
    try {
      const [rows] = await this.promisePool.execute(`
        INSERT INTO CATEGORY (${Object.keys(category).join()})
        VALUES (${Object.values(category).map(format.addQuotesToString).join()})
      `);

      return rows.insertId;
    } catch (e) {
      console.error(e);
    }
  }

  async updateCategoryById(id: number, category: categoryUpdateType) {
    try {
      const options = Object.entries(category)
        .map(([key, value]) => `${key} = ${format.addQuotesToString(value)}`)
        .join();

      const [rows] = await this.promisePool.execute(`
        UPDATE CATEGORY SET ${options} 
        WHERE id = ${id}
        `);

      return rows;
    } catch (e) {
      console.error(e);
    }
  }
}
