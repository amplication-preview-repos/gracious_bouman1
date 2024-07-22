import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  attendanceDate?: SortOrder;
  status?: SortOrder;
  studentId?: SortOrder;
  courseId?: SortOrder;
};
