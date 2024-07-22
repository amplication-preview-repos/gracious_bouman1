import { SortOrder } from "../../util/SortOrder";

export type EnrollmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  enrollDate?: SortOrder;
  courseId?: SortOrder;
  studentId?: SortOrder;
};
