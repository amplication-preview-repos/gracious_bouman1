import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  courseName?: SortOrder;
  courseCode?: SortOrder;
  description?: SortOrder;
};
