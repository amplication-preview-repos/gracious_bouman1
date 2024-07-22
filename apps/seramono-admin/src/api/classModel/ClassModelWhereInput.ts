import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ClassModelWhereInput = {
  id?: StringFilter;
  classRoom?: StringNullableFilter;
  className?: StringNullableFilter;
  course?: CourseWhereUniqueInput;
};
