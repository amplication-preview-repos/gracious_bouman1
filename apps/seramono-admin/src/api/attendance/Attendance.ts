import { Student } from "../student/Student";
import { Course } from "../course/Course";

export type Attendance = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  attendanceDate: Date | null;
  status?: "Option1" | null;
  student?: Student | null;
  course?: Course | null;
};
