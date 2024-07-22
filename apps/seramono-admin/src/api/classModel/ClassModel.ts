import { Course } from "../course/Course";

export type ClassModel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  classRoom: string | null;
  className: string | null;
  course?: Course | null;
};
