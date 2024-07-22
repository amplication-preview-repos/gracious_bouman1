import { SortOrder } from "../../util/SortOrder";

export type StaffOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  position?: SortOrder;
  staffId?: SortOrder;
  email?: SortOrder;
};
