import { PickType } from '@nestjs/mapped-types';
import { Store } from '../entities/store.entity';

export class CreateStoreDto extends PickType(Store, ['name', 'password']) {}
