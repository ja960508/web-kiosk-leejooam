import { Product } from 'src/product/entities/product.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReceiptByProduct {
  @PrimaryGeneratedColumn()
  @ManyToOne(() => Product, (product) => product.receiptByProduct)
  product: Product;
}
