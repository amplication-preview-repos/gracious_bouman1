import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type EnrollmentUpdateInput = {
  enrollDate?: Date | null;
  course?: CourseWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
