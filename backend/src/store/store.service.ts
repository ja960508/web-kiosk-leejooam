import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async create(createStoreDto: CreateStoreDto) {
    const newStore = this.storeRepository.create(createStoreDto);
    await this.storeRepository.save(newStore);
  }

  async findOne(id: number) {
    return await this.storeRepository.find({ where: { id } });
  }

  async deleteById(id: number) {
    return await this.storeRepository.softDelete({ id });
  }

  async updateById(id: number, updateStoreDto: UpdateStoreDto) {
    return await this.storeRepository.update(id, updateStoreDto);
  }
}
