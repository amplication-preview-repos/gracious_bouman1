import { ClassModel } from "../classModel/ClassModel";
import { Enrollment } from "../enrollment/Enrollment";
import { Attendance } from "../attendance/Attendance";
import { Register } from "../register/Register";

export type Course = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  courseName: string | null;
  courseCode: string | null;
  description: string | null;
  classes?: Array<ClassModel>;
  enrollments?: Array<Enrollment>;
  attendances?: Array<Attendance>;
  registers?: Array<Register>;
};
