import { Children, cloneElement } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import type { ReactElement } from 'react';
import type { AnyObject, ObjectSchema } from 'yup';
import type { TFormField } from 'Types';

interface IFormProps {
  validation: ObjectSchema<any, AnyObject, any, ''>;
  onSubmit: () => void;
  children: ReactElement<TFormField> | ReactElement<TFormField>[];
}

export const Form = ({ validation, onSubmit, children }: IFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
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
