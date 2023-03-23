import { Controller } from 'react-hook-form';

import { TextInput, PassInput } from 'Components';

import type { TFormField } from 'Types';

export const FormField = ({
  control,
  name,
  defaultValue = '',
  type = 'text',
  ...rest
}: TFormField) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
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
