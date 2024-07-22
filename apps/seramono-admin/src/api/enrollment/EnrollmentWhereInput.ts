import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type EnrollmentWhereInput = {
  id?: StringFilter;
  enrollDate?: DateTimeNullableFilter;
  course?: CourseWhereUniqueInput;
  student?: StudentWhereUniqueInput;
};
