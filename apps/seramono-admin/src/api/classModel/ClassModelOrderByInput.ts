import { SortOrder } from "../../util/SortOrder";

export type ClassModelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  classRoom?: SortOrder;
  className?: SortOrder;
  courseId?: SortOrder;
};
