import { Children, cloneElement } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import type { ReactElement } from 'react';
import type { AnyObject, ObjectSchema } from 'yup';
import type { TFormField } from 'Types';
import type { FieldValues, SubmitHandler } from 'react-hook-form';

interface IFormProps<T extends FieldValues> {
  validation: ObjectSchema<any, AnyObject, any, ''>;
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
    formState: { errors, isSubmitted },
  } = useForm<T>({
    resolver: yupResolver(validation),
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
          disabled={isSubmitted && !!errors}
        >
          submit
        </Button>
      </>
    </Stack>
  );
};
