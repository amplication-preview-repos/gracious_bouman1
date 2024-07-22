import { AttendanceCreateNestedManyWithoutStudentsInput } from "./AttendanceCreateNestedManyWithoutStudentsInput";
import { RegisterCreateNestedManyWithoutStudentsInput } from "./RegisterCreateNestedManyWithoutStudentsInput";
import { EnrollmentCreateNestedManyWithoutStudentsInput } from "./EnrollmentCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  lastName?: string | null;
  email?: string | null;
  dateOfBirth?: Date | null;
  firstName?: string | null;
  attendances?: AttendanceCreateNestedManyWithoutStudentsInput;
  registers?: RegisterCreateNestedManyWithoutStudentsInput;
  enrollments?: EnrollmentCreateNestedManyWithoutStudentsInput;
  parent?: string | null;
};
