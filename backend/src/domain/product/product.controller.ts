import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { productCreateType } from './product.type';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProductByCategoryId(@Query('categoryId') categoryId: number) {
    return await this.productService.getProductByCategoryId(categoryId);
  }

  @Post()
  async createProduct(@Body() product: productCreateType) {
    await this.productService.createProduct(product);

    return 'created';
  }

  @Delete(':id')
  async deleteProductById(@Param('id') id: number) {
    await this.productService.deleteProductById(id);

    return 'deleted';
  }
}
