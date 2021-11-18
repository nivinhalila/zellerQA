export type ZellerAdmin = "ADMIN";
export type ZellerManager = "MANAGER";
export type ZellerRoles = ZellerAdmin | ZellerManager;

export interface ZellerCustomer {
  email: string;
  id: string;
  name: string;
  role: string;
}

export interface ListZellerCustomersData {
  listZellerCustomers: {
    items: ZellerCustomer[];
  };
}
