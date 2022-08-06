import { Body, Controller, Post } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { receiptCreateType } from './receipt.type';

@Controller('receipt')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}
  @Post()
  async createReceipt(@Body() receipt: receiptCreateType) {
    await this.receiptService.createReceipt(receipt);

    return 'created';
  }
}
