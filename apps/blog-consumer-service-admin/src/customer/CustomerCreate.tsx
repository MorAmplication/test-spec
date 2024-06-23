import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Age" source="age" />
      </SimpleForm>
    </Create>
  );
};
