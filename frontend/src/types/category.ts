export interface CategoryType {
  id: number;
  name: string;
  storeId: number;
}

export interface CategoryAddType {
  name: string;
  storeId: number;
}

export const initialCategoryValue: CategoryType = {
  id: 0,
  name: '',
  storeId: 0,
};
