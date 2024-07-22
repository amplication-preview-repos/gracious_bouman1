import { ClassModelUpdateManyWithoutCoursesInput } from "./ClassModelUpdateManyWithoutCoursesInput";
import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";
import { AttendanceUpdateManyWithoutCoursesInput } from "./AttendanceUpdateManyWithoutCoursesInput";
import { RegisterUpdateManyWithoutCoursesInput } from "./RegisterUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  courseName?: string | null;
  courseCode?: string | null;
  description?: string | null;
  classes?: ClassModelUpdateManyWithoutCoursesInput;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
  attendances?: AttendanceUpdateManyWithoutCoursesInput;
  registers?: RegisterUpdateManyWithoutCoursesInput;
};
