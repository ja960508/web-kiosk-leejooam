import { IsDecimal } from 'class-validator';
import { Store } from 'src/store/entities/store.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { paymentMethod } from './payment-method-type';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: paymentMethod })
  paymentMethod: paymentMethod;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 0,
    default: 0,
    nullable: true,
  })
  @IsDecimal()
  paidAmount: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 0,
    default: 0,
  })
  @IsDecimal()
  totalAmount: number;

  @Column({ type: 'date' })
  paymentDate: Date;

  @Column({ type: 'int' })
  orderNumber: number;

  @ManyToOne(() => Store, (store) => store.receipt)
  store: Store;
}
