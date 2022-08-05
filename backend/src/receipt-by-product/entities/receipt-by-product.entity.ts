import { Product } from 'src/product/entities/product.entity';
import { Receipt } from 'src/receipt/entities/receipt.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class ReceiptByProduct {
  @PrimaryColumn()
  productId: number;

  @PrimaryColumn()
  receiptId: number;

  @Column()
  count: number;

  @ManyToOne(() => Product, (product) => product.receiptByProduct)
  product: Product;

  @ManyToOne(() => Receipt, (receipt) => receipt.receiptByProduct)
  receipt: Receipt;
}
