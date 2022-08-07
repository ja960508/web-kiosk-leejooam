import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { StoreService } from './store.service';
import { storeCreateType, storeLoginType, storeUpdateType } from './store.type';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('login')
  async loginStore(@Body() store: storeLoginType) {
    return this.storeService.loginStore(store);
  }

  @Post('register')
  async create(@Body() store: storeCreateType) {
    await this.storeService.create(store);

    return 'created';
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() store: storeUpdateType) {
    await this.storeService.updateById(id, store);

    return 'updated';
  }
}
