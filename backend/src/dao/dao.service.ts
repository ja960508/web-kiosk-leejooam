import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2';

@Injectable()
export class DaoService {
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
}
