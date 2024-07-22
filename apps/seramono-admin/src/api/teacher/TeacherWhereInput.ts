import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TeacherWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  hireDate?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
};
