export interface storeCreateType {
  storeId: string;
  name: string;
  password: string;
  branchName?: string;
}

export interface storeUpdateType {
  name?: string;
  password?: string;
  branchName?: string;
}
