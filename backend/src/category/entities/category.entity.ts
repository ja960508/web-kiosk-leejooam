import { IsString, Length } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';
import { Store } from 'src/store/entities/store.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @Length(2, 20)
  name: string;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Store, (store) => store.category)
  store: Store;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
