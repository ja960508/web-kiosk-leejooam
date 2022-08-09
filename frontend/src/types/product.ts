export interface ProductOptionType {
  type: string;
  optionName: string;
  content: string[];
}

export interface ProductType {
  id: number;
  name: string;
  thumbnail: string;
  price: string;
  categoryId: number;
  isPopular: boolean;
  isSoldOut: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productOption: ProductOptionType[];
}
