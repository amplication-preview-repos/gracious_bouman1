import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type EnrollmentCreateInput = {
  enrollDate?: Date | null;
  course?: CourseWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
