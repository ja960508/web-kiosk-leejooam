import { Injectable } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';
import format from '../utils/format';
import { productCreateType, productUpdateType } from './product.type';

@Injectable()
export class ProductService {
  promisePool: any;
  constructor(private mysqlService: MySQLService) {
    this.promisePool = this.mysqlService.pool.promise();
  }

  async getProductByCategoryId(categoryId: number) {
    try {
      const [rows] = await this.promisePool.execute(`SELECT * FROM PRODUCT
      WHERE categoryId = ${categoryId}`);

      return rows;
    } catch (e) {
      console.error(e);
    }
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

  async updateProductById(id: number, product: productUpdateType) {
    try {
      const options = Object.entries(product)
        .map(([key, value]) => `${key} = ${format.formatData(value)}`)
        .join();

      const [rows] = await this.promisePool.execute(`
        UPDATE PRODUCT SET ${options} 
        WHERE id = ${id}
        `);

      return rows;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteProductById(id: number) {
    try {
      const [rows] = await this.promisePool.execute(`
        DELETE FROM PRODUCT
        WHERE id = ${id}
      `);

      return rows;
    } catch (e) {
      console.error(e);
    }
  }
}
