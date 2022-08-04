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

  @Column({ type: 'varchar', length: 20 })
  @IsString()
  @Length(2, 20)
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @IsDecimal()
  price: number;

  @Column({ type: 'json', nullable: true })
  @IsJSON()
  option: JSON;

  @Column({ nullable: true })
  @IsString()
  thumbnail: string;

  @Column({ type: 'boolean', nullable: true })
  @IsBoolean()
  isPopular: boolean;

  @Column({ type: 'boolean', nullable: true })
  @IsBoolean()
  isSoldOut: boolean;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;
}
