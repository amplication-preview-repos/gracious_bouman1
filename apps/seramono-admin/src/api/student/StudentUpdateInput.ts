import { AttendanceUpdateManyWithoutStudentsInput } from "./AttendanceUpdateManyWithoutStudentsInput";
import { RegisterUpdateManyWithoutStudentsInput } from "./RegisterUpdateManyWithoutStudentsInput";
import { EnrollmentUpdateManyWithoutStudentsInput } from "./EnrollmentUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  lastName?: string | null;
  email?: string | null;
  dateOfBirth?: Date | null;
  firstName?: string | null;
  attendances?: AttendanceUpdateManyWithoutStudentsInput;
  registers?: RegisterUpdateManyWithoutStudentsInput;
  enrollments?: EnrollmentUpdateManyWithoutStudentsInput;
  parent?: string | null;
};
