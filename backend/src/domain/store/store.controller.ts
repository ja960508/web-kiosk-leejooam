import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StoreService } from './store.service';
import { storeCreateType } from './store.type';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.storeService.findById(id);
  }

  @Post()
  async create(@Body() store: storeCreateType) {
    await this.storeService.create(store);

    return 'created';
  }
}
