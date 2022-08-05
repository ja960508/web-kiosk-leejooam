import { Injectable, OnModuleInit } from '@nestjs/common';
import { DaoService } from '../dao.service';

@Injectable()
export class categoryService implements OnModuleInit {
  constructor(private daoService: DaoService) {}
  async onModuleInit() {
    const poolPromise = this.daoService.pool.promise();
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
