export interface ProductType {
  id: number;
  name: string;
  thumbnail: string;
  price: string;
  categoryId: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productOption: any;
}
