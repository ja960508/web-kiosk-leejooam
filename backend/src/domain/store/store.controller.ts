import { Body, Controller, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { StoreService } from './store.service';
import { storeCreateType, storeLoginType, storeUpdateType } from './store.type';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('login')
  async loginStore(
    @Res({ passthrough: true }) response: Response,
    @Body() store: storeLoginType,
    @Req() request: Request,
  ) {
    console.log(request.cookies);
    const res = await this.storeService.loginStore(store);
    response.cookie('storeId', res.id, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 30 * 1000,
    });

    return res;
  }

  @Post('register')
  async createStore(
    @Res({ passthrough: true }) response: Response,
    @Body() store: storeCreateType,
  ) {
    const res = await this.storeService.createStore(store);
    response.cookie('storeId', res.id, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 30 * 1000,
    });

    return res;
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() store: storeUpdateType) {
    await this.storeService.updateById(id, store);

    return 'updated';
  }
}
