import { Children, cloneElement } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import type { ReactElement } from 'react';
import type { TFormField } from 'Types';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import type { ZodSchema } from 'zod';
import type { SxProps } from '@mui/material';

interface IFormProps<T extends FieldValues> {
  validation?: ZodSchema<T>;
  onSubmit?: SubmitHandler<T>;
  children: ReactElement<TFormField<T>> | ReactElement<TFormField<T>>[];
  sx?: SxProps;
}

export const Form = <T extends FieldValues>({
  validation,
  onSubmit,
  children,
  sx,
}: IFormProps<T>) => {
  const {
    control,
    handleSubmit,
    formState: { errors, submitCount, isValid, isDirty },
  } = useForm<T>({
    resolver: validation && zodResolver(validation),
  });

  return (
    <Stack component="form" sx={{ width: '100%', gap: 3, ...sx }}>
      <>
        {Children.map(children, (child) => cloneElement(child, { control }))}

        <Button
          type="submit"
          variant="text"
          color="additional"
          onClick={onSubmit && handleSubmit(onSubmit)}
          disabled={
            (!!errors && !isDirty && submitCount === 1) ||
            (!isValid && submitCount !== 0)
          }
        >
          submit
        </Button>
      </>
    </Stack>
  );
};
