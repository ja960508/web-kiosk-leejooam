import { IsString, Length } from 'class-validator';
import {
  Column,
  DeleteDateColumn,
  Entity,
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
}
