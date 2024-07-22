import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { RegisterListRelationFilter } from "../register/RegisterListRelationFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  attendances?: AttendanceListRelationFilter;
  registers?: RegisterListRelationFilter;
  enrollments?: EnrollmentListRelationFilter;
  parent?: StringNullableFilter;
};
