import { Controller } from 'react-hook-form';

import { TextInput, PassInput } from 'Components';

import type { TFormField } from 'Types';
import type { FieldValues, Path, PathValue } from 'react-hook-form';

export const FormField = <T extends FieldValues>({
  control,
  name,
  defaultValue = '',
  type = 'text',
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
            />
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
            />
          );
      }
    }}
  />
);
