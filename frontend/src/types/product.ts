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
  productOption: ProductOptionType[];
}

export const initialProductType = {
  id: -1,
  name: '',
  thumbnail: '',
  price: '',
  categoryId: -1,
  isPopular: false,
  isSoldOut: false,
  productOption: [],
};
