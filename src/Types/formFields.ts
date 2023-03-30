import { Control } from 'react-hook-form';

import { formFieldNames } from 'Constants';

import type { TextFieldProps } from '@mui/material/TextField';
import type { FieldValues } from 'react-hook-form';

export type TTextInputProps = {
  value: string;
  error: boolean;
  isSubmitted: boolean;
  helperText?: string;
} & TextFieldProps;

interface TPassCheck {
  withPassCheck?: boolean;
}

export type TPassInputProps = Omit<TTextInputProps, 'isSubmitted'> & TPassCheck;

export type TFormField<T extends FieldValues> = {
  name: (typeof formFieldNames)[keyof typeof formFieldNames];
  control?: Control<T, any>;
  defaultValue?: string;
} & TextFieldProps &
  TPassCheck;
