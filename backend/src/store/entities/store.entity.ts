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
  @Length(2, 10)
  name: string;

  @Column({
    length: 50,
  })
  password: string;

  @Column({ nullable: true, length: 45 })
  branchName: string;

  @DeleteDateColumn()
  deleteAt: Date;
}
