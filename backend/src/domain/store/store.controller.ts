import {
  Body,
  Controller,
  Get,
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

  @Get(':id')
  async getStoreById(@Param('id') id: number) {
    const res = await this.storeService.getStoreById(id);

    if (!res || !res.id) {
      throw new HttpException('Login Failed...', HttpStatus.UNAUTHORIZED);
    }

    return res;
  }

  @Post('login')
  async loginStore(@Body() store: storeLoginType) {
    const res = await this.storeService.loginStore(store);

    if (!res || !res.id) {
      throw new HttpException('Login Failed...', HttpStatus.UNAUTHORIZED);
    }

    return res;
  }

  @Post('register')
  async createStore(@Body() store: storeCreateType) {
    const res = await this.storeService.createStore(store);

    if (!res.id) {
      throw new HttpException('storeId is Already Exist', HttpStatus.FORBIDDEN);
    }

    return res;
  }

  @Post('checkPassword')
  async checkPasswordByStoreId(@Body() store: storeLoginType) {
    const res = await this.storeService.checkPasswordByStoreId(store);

    return res;
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() store: storeUpdateType) {
    await this.storeService.updateById(id, store);

    return 'updated';
  }
}
