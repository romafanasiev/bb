import { Control } from 'react-hook-form';

import { formFieldNames } from 'Constants';

import type { TextFieldProps } from '@mui/material/TextField';
import type { FieldValues } from 'react-hook-form';

export type TTextInputProps = {
  value: string;
  error: boolean;
  isSubmitted: boolean;
  helperText?: string | undefined;
} & TextFieldProps;

interface TPassCheck {
  withPassCheck?: boolean;
}

export type TPassInputProps = Omit<TTextInputProps, 'isSubmitted'> & TPassCheck;

export type TFormField = {
  name: (typeof formFieldNames)[keyof typeof formFieldNames];
  control?: Control<FieldValues, any>;
  defaultValue?: string;
} & TextFieldProps &
  TPassCheck;
