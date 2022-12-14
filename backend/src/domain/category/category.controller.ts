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
import { CategoryService } from './category.service';
import { categoryCreateType, categoryUpdateType } from './category.type';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategoryByStoreId(@Query('storeId') storeId: number) {
    return this.categoryService.getCategoryByStoreId(storeId);
  }

  @Post()
  async createCategory(@Body() category: categoryCreateType) {
    const response = await this.categoryService.createCategory(category);

    return response;
  }

  @Patch(':id')
  async updateCategoryById(
    @Param('id') id: number,
    @Body() category: categoryUpdateType,
  ) {
    await this.categoryService.updateCategoryById(id, category);

    return 'updated';
  }

  @Delete(':id')
  async deleteCategoryById(@Param('id') id: number) {
    await this.categoryService.deleteCategoryById(id);

    return 'deleted';
  }
}
