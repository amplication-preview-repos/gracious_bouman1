import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type AttendanceUpdateInput = {
  attendanceDate?: Date | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
  course?: CourseWhereUniqueInput | null;
};
