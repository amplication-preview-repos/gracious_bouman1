import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  hireDate?: SortOrder;
  firstName?: SortOrder;
};
