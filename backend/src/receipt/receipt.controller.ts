import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';

@Controller('receipt')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Post()
  create(@Body() createReceiptDto: CreateReceiptDto) {
    return this.receiptService.create(createReceiptDto);
  }

  @Get()
  getReceiptByStoreId(@Query('storeId') storeId: number) {
    return this.receiptService.getReceiptByStoreId(storeId);
  }
}
