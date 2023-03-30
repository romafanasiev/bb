import { Controller } from 'react-hook-form';
import { Button, Stack, Typography } from '@mui/material';

import type { TFormField } from 'Types';
import type { FieldValues, Path, PathValue } from 'react-hook-form';
import type { ChangeEvent } from 'react';

export const FileFormField = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  label,
}: TFormField<T>) => (
  <Controller
    name={name as Path<T>}
    control={control}
    defaultValue={defaultValue as PathValue<T, Path<T>>}
    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
      <Stack>
        <Button
          variant="contained"
          component="label"
          color={error ? 'error' : 'primary'}
        >
          {value ? value.name : label}
          <input
            hidden
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.files) {
                onChange(e.target.files[0]);
              }
            }}
            onBlur={onBlur}
          />
        </Button>

        {!!error && (
          <Typography variant="caption" mt={1} color="error">
            {error.message}
          </Typography>
        )}
      </Stack>
    )}
  />
);
