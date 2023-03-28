import { Controller } from 'react-hook-form';
import { Button } from '@mui/material';

import { TextInput, PassInput } from 'Components';

import type { TFormField } from 'Types';
import type { FieldValues, Path, PathValue } from 'react-hook-form';

export const FormField = <T extends FieldValues>({
  control,
  name,
  defaultValue = '',
  type = 'text',
  label,
  color,
  ...rest
}: TFormField<T>) => (
  <Controller
    name={name as Path<T>}
    control={control}
    defaultValue={defaultValue as PathValue<T, Path<T>>}
    render={({
      field: { onChange, value, onBlur },
      fieldState: { error },
      formState: { isSubmitted },
    }) => {
      switch (type) {
        case 'password':
          return (
            <PassInput
              {...rest}
              error={!!error}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              helperText={error?.message}
              type={type}
              label={label}
            />
          );

        case 'file':
          return (
            <Button variant="contained" component="label">
              {value ? value : label}
              <input hidden type={type} onChange={onChange} onBlur={onBlur} />
            </Button>
          );

        default:
          return (
            <TextInput
              {...rest}
              isSubmitted={isSubmitted}
              error={!!error}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              helperText={error?.message}
              type={type}
              label={label}
              color={color}
            />
          );
      }
    }}
  />
);
