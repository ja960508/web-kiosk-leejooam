import { Injectable, OnModuleInit } from '@nestjs/common';
import { MySQLService } from 'src/config/mysql/mysql.service';

@Injectable()
export class categoryService implements OnModuleInit {
  constructor(private mysqlService: MySQLService) {}
  async onModuleInit() {
    const poolPromise = this.mysqlService.pool.promise();
    await poolPromise.execute(`
      CREATE TABLE IF NOT EXISTS CATEGORY (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20) NOT NULL,
        store_id INT,
        deleted_at DATETIME,
        FOREIGN_KEY (store_id) REFERENCES STORE(id)
      )
    `);
  }
}
