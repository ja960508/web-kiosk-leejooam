export interface productCreateType {
  name: string;
  price: number;
  categoryId: number;
  productOption?: JSON;
  thumbnail?: string;
}

export interface productUpdateType {
  name?: string;
  price?: number;
  productOption?: JSON;
  thumbnail?: string;
  isPopular?: boolean;
  isSoldOut?: boolean;
}
