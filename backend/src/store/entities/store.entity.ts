import { IsString, Length } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { Receipt } from 'src/receipt/entities/receipt.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @Length(2, 20)
  name: string;

  @IsString()
  @Length(8, 20)
  @Column({
    length: 20,
  })
  password: string;

  @IsString()
  @Length(2, 20)
  @Column({ nullable: true, length: 20 })
  branchName: string;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToMany(() => Category, (category) => category.store)
  category: Category[];

  @OneToMany(() => Receipt, (receipt) => receipt.store)
  receipt: Receipt[];
}
