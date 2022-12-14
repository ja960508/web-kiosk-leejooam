import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { receiptCreateType } from './receipt.type';

@Controller('receipt')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Post()
  async createReceipt(@Body() receipt: receiptCreateType) {
    const insertId = await this.receiptService.createReceipt(receipt);
    const createdReceipt = await this.receiptService.getReceiptInfoById(
      insertId,
    );

    return createdReceipt;
  }

  @Get()
  async getReceiptByStoreId(@Query('storeId') storeId: number) {
    return await this.receiptService.getReceiptByStoreId(storeId);
  }

  @Get(':id')
  async getReceiptInfoById(@Param('id') id: number) {
    return await this.receiptService.getReceiptInfoById(id);
  }
}
