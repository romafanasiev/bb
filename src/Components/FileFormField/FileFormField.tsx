import { Controller } from 'react-hook-form';
import { Button } from '@mui/material';

import type { TFormField } from 'Types';
import type { FieldValues, Path, PathValue } from 'react-hook-form';

export const FileFormField = <T extends FieldValues>({
  control,
  name,
  defaultValue = '',
  label,
}: TFormField<T>) => (
  <Controller
    name={name as Path<T>}
    control={control}
    defaultValue={defaultValue as PathValue<T, Path<T>>}
    render={({ field: { onChange, value, onBlur } }) => (
      <Button variant="contained" component="label">
        {value ? value : label}
        <input hidden type="file" onChange={onChange} onBlur={onBlur} />
      </Button>
    )}
  />
);
