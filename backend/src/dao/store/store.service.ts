import { Injectable, OnModuleInit } from '@nestjs/common';
import { DaoService } from '../dao.service';

@Injectable()
export class storeService implements OnModuleInit {
  constructor(private daoService: DaoService) {}
  async onModuleInit() {
    const poolPromise = this.daoService.pool.promise();
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
}
