import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ClassModelTitle } from "../classModel/ClassModelTitle";
import { EnrollmentTitle } from "../enrollment/EnrollmentTitle";
import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { RegisterTitle } from "../register/RegisterTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="courseName" source="courseName" />
        <TextInput label="courseCode" source="courseCode" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="classes"
          reference="ClassModel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClassModelTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="enrollments"
          reference="Enrollment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EnrollmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="registers"
          reference="Register"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RegisterTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
