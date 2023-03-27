import { Children, cloneElement } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import type { ReactElement } from 'react';
import type { TFormField } from 'Types';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import type { ZodSchema } from 'zod';

interface IFormProps<T extends FieldValues> {
  validation: ZodSchema<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactElement<TFormField<T>> | ReactElement<TFormField<T>>[];
}

export const Form = <T extends FieldValues>({
  validation,
  onSubmit,
  children,
}: IFormProps<T>) => {
  const {
    control,
    handleSubmit,
    formState: { errors, submitCount, isValid, isDirty },
  } = useForm<T>({
    resolver: zodResolver(validation),
  });

  return (
    <Stack component="form" gap={3} sx={{ width: '100%' }}>
      <>
        {Children.map(children, (child) => cloneElement(child, { control }))}

        <Button
          type="submit"
          variant="text"
          color="additional"
          onClick={handleSubmit(onSubmit)}
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
