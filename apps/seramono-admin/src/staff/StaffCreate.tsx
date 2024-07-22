import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const StaffCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="position" source="position" />
        <NumberInput step={1} label="staffId" source="staffId" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};
