export interface storeCreateType {
  name: string;
  password: string;
  branchName?: string;
}

export interface storeUpdateType {
  name?: string;
  password?: string;
  branchName?: string;
}
