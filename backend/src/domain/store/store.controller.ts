import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { storeCreateType, storeLoginType, storeUpdateType } from './store.type';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('login')
  async loginStore(@Body() store: storeLoginType) {
    const res = await this.storeService.loginStore(store);

    if (!res || !res.id) {
      throw new HttpException('Login Failed...', HttpStatus.UNAUTHORIZED);
    }

    return res.id;
  }

  @Post('register')
  async createStore(@Body() store: storeCreateType) {
    const res = await this.storeService.createStore(store);

    if (!res.id) {
      throw new HttpException('storeId is Already Exist', HttpStatus.FORBIDDEN);
    }

    return res.id;
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() store: storeUpdateType) {
    await this.storeService.updateById(id, store);

    return 'updated';
  }
}
