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

export interface ProductAddType {
  name: string;
  thumbnail: string;
  price: string;
  categoryId: number;
  isPopular: boolean;
  isSoldOut: boolean;
  productOption?: ProductOptionType[];
}

export const initialProductOptionValue = {
  type: 'quantity',
  optionName: '',
  content: [],
};

export const initialProductValue = {
  id: 0,
  name: '',
  thumbnail:
    'http://www.mmthcoffee.com/data/file/mm_32oz/thumb-3546841901_BLR1xZ0O_ed12d06aab14b28bad6150579cf14be30d2a95aa_216x216.png',
  price: '',
  categoryId: 0,
  isPopular: false,
  isSoldOut: false,
  productOption: [],
};

export const initialProductAddValue = {
  name: '',
  thumbnail:
    'http://www.mmthcoffee.com/data/file/mm_32oz/thumb-3546841901_BLR1xZ0O_ed12d06aab14b28bad6150579cf14be30d2a95aa_216x216.png',
  price: '',
  categoryId: 0,
  isPopular: false,
  isSoldOut: false,
  productOption: [],
};
