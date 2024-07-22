import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TeacherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="hireDate" source="hireDate" />
        <TextInput label="firstName" source="firstName" />
      </SimpleForm>
    </Create>
  );
};
