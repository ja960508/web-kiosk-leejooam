export interface ProductOptionType {
  type: string;
  optionName: string;
  content?: string[];
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

export interface ProductAddType {
  name: string;
  thumbnail: string;
  price: string;
  categoryId: number;
  isPopular: boolean;
  isSoldOut: boolean;
  productOption?: ProductOptionType[];
}

export const initialProductValue = {
  id: 0,
  name: '',
  thumbnail: '',
  price: '',
  categoryId: 0,
  isPopular: false,
  isSoldOut: false,
  productOption: [],
};

export const initialProductAddValue = {
  name: '',
  thumbnail: '',
  price: '',
  categoryId: 0,
  isPopular: false,
  isSoldOut: false,
  productOption: [],
};
