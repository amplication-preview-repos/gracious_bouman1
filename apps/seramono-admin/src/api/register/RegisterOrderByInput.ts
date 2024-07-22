import { SortOrder } from "../../util/SortOrder";

export type RegisterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  registerDate?: SortOrder;
  status?: SortOrder;
  studentId?: SortOrder;
  courseId?: SortOrder;
};
