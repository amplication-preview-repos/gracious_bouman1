import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TeacherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="hireDate" source="hireDate" />
        <TextInput label="firstName" source="firstName" />
      </SimpleForm>
    </Edit>
  );
};
