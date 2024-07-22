import { SortOrder } from "../../util/SortOrder";

export type ParentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  email?: SortOrder;
  lastName?: SortOrder;
};
