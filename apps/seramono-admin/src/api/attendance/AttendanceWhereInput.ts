import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type AttendanceWhereInput = {
  id?: StringFilter;
  attendanceDate?: DateTimeNullableFilter;
  status?: "Option1";
  student?: StudentWhereUniqueInput;
  course?: CourseWhereUniqueInput;
};
