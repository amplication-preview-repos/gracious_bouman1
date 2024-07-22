import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ClassModelUpdateInput = {
  classRoom?: string | null;
  className?: string | null;
  course?: CourseWhereUniqueInput | null;
};
