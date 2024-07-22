import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ParentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="lastName" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
