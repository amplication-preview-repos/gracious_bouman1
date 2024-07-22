import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { RegisterListRelationFilter } from "../register/RegisterListRelationFilter";

export type CourseWhereInput = {
  id?: StringFilter;
  courseName?: StringNullableFilter;
  courseCode?: StringNullableFilter;
  description?: StringNullableFilter;
  classes?: ClassModelListRelationFilter;
  enrollments?: EnrollmentListRelationFilter;
  attendances?: AttendanceListRelationFilter;
  registers?: RegisterListRelationFilter;
};
