import { ClassModelCreateNestedManyWithoutCoursesInput } from "./ClassModelCreateNestedManyWithoutCoursesInput";
import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";
import { AttendanceCreateNestedManyWithoutCoursesInput } from "./AttendanceCreateNestedManyWithoutCoursesInput";
import { RegisterCreateNestedManyWithoutCoursesInput } from "./RegisterCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  courseName?: string | null;
  courseCode?: string | null;
  description?: string | null;
  classes?: ClassModelCreateNestedManyWithoutCoursesInput;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  attendances?: AttendanceCreateNestedManyWithoutCoursesInput;
  registers?: RegisterCreateNestedManyWithoutCoursesInput;
};
