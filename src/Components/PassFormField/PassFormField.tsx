import { Controller } from 'react-hook-form';

import { PassInput } from 'Components';

import type { TFormField } from 'Types';
import type { FieldValues, Path, PathValue } from 'react-hook-form';

export const PassFormField = <T extends FieldValues>({
  control,
  name,
  defaultValue = '',
  ...rest
}: TFormField<T>) => (
  <Controller
    name={name as Path<T>}
    control={control}
    defaultValue={defaultValue as PathValue<T, Path<T>>}
    render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
      <PassInput
        {...rest}
        error={!!error}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        helperText={error?.message}
      />
    )}
  />
);
