import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReceiptByProductService } from './receipt-by-product.service';
import { CreateReceiptByProductDto } from './dto/create-receipt-by-product.dto';
import { UpdateReceiptByProductDto } from './dto/update-receipt-by-product.dto';

@Controller('receipt-by-product')
export class ReceiptByProductController {
  constructor(
    private readonly receiptByProductService: ReceiptByProductService,
  ) {}

  @Post()
  create(@Body() createReceiptByProductDto: CreateReceiptByProductDto) {
    return this.receiptByProductService.create(createReceiptByProductDto);
  }

  @Get()
  findAll() {
    return this.receiptByProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiptByProductService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReceiptByProductDto: UpdateReceiptByProductDto,
  ) {
    return this.receiptByProductService.update(+id, updateReceiptByProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receiptByProductService.remove(+id);
  }
}
