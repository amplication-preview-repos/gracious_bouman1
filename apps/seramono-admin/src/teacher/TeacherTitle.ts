import { Teacher as TTeacher } from "../api/teacher/Teacher";

export const TEACHER_TITLE_FIELD = "lastName";

export const TeacherTitle = (record: TTeacher): string => {
  return record.lastName?.toString() || String(record.id);
};
