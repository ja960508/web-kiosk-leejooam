import {
  IsBoolean,
  IsDecimal,
  IsJSON,
  IsString,
  Length,
} from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @Length(2, 20)
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @IsDecimal()
  price: number;

  @Column({ type: 'json', nullable: true })
  @IsJSON()
  option: JSON;

  @Column()
  @IsString()
  thumbnail: string;

  @Column({ type: 'boolean' })
  @IsBoolean()
  isPopular: boolean;

  @Column({ type: 'boolean' })
  @IsBoolean()
  isSoldOut: boolean;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;
}
