import { Body, Controller, Post } from '@nestjs/common';
import { StoreService } from './store.service';
import { storeCreateType } from './store.type';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  async create(@Body() store: storeCreateType) {
    await this.storeService.create(store);

    return 'created';
  }
}
