import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TeacherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="lastName" source="lastName" />
        <TextField label="email" source="email" />
        <TextField label="hireDate" source="hireDate" />
        <TextField label="firstName" source="firstName" />
      </SimpleShowLayout>
    </Show>
  );
};
