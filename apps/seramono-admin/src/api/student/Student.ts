import { Attendance } from "../attendance/Attendance";
import { Register } from "../register/Register";
import { Enrollment } from "../enrollment/Enrollment";

export type Student = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  email: string | null;
  dateOfBirth: Date | null;
  firstName: string | null;
  attendances?: Array<Attendance>;
  registers?: Array<Register>;
  enrollments?: Array<Enrollment>;
  parent: string | null;
};
