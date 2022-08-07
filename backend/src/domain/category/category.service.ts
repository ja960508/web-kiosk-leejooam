import { Injectable } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import format from '../utils/format';
import { categoryCreateType, categoryUpdateType } from './category.type';

@Injectable()
export class CategoryService {
  promisePool: any;
  constructor(private mysqlService: MySQLService) {
    this.promisePool = this.mysqlService.pool.promise();
  }

  async getCategoryByStoreId(storeId: number) {
    try {
      const [rows] = await this.promisePool.execute(`SELECT * FROM CATEGORY
      WHERE storeId = ${storeId}`);

      return rows;
    } catch (e) {
      console.error(e);
    }
  }

  async createCategory(category: categoryCreateType) {
    try {
      const [rows] = await this.promisePool.execute(`
        INSERT INTO CATEGORY (${Object.keys(category).join()})
        VALUES (${Object.values(category).map(format.formatData).join()})
      `);

      return rows.insertId;
    } catch (e) {
      console.error(e);
    }
  }

  async updateCategoryById(id: number, category: categoryUpdateType) {
    try {
      const options = Object.entries(category)
        .map(([key, value]) => `${key} = ${format.formatData(value)}`)
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

  async deleteCategoryById(id: number) {
    try {
      const [rows] = await this.promisePool.execute(`
        DELETE FROM CATEGORY
        WHERE id = ${id}
      `);

      return rows;
    } catch (e) {
      console.error(e);
    }
  }
}
