import { Student } from "../student/Student";
import { Course } from "../course/Course";

export type Register = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  registerDate: Date | null;
  status?: "Option1" | null;
  student?: Student | null;
  course?: Course | null;
};
