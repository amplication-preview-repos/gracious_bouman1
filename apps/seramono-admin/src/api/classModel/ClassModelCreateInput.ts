import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ClassModelCreateInput = {
  classRoom?: string | null;
  className?: string | null;
  course?: CourseWhereUniqueInput | null;
};
