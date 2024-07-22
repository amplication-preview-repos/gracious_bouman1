import { Course } from "../course/Course";
import { Student } from "../student/Student";

export type Enrollment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  enrollDate: Date | null;
  course?: Course | null;
  student?: Student | null;
};
