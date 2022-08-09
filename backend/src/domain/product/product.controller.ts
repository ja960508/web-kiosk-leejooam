import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { productCreateType, productUpdateType } from './product.type';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProductByCategoryId(@Query('categoryId') categoryId: number) {
    return await this.productService.getProductByCategoryId(categoryId);
  }

  @Post()
  async createProduct(@Body() product: productCreateType) {
    const insertedId = await this.productService.createProduct(product);

    return insertedId;
  }

  @Patch(':id')
  async updateProductById(
    @Param('id') id: number,
    @Body() product: productUpdateType,
  ) {
    await this.productService.updateProductById(id, product);

    return 'updated';
  }

  @Delete(':id')
  async deleteProductById(@Param('id') id: number) {
    await this.productService.deleteProductById(id);

    return 'deleted';
  }
}
