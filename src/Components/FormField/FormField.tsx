import { TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

import type { TextFieldProps } from '@mui/material/TextField';

type FormFieldProps = {
  name: string;
  control: Control<FieldValues, any>;
} & TextFieldProps;

export const FormField = ({ control, name, ...rest }: FormFieldProps) => (
  <Controller
    name={name}
    control={control}
    render={() => <TextField fullWidth {...rest} />}
  />
);
