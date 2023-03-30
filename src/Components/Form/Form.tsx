import { Children, cloneElement } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, Button } from '@mui/material';
import { Path, useForm } from 'react-hook-form';

import { globalStyles } from 'Constants';
import { FileFormField } from 'Components';

import type { ReactElement } from 'react';
import type { TFormField } from 'Types';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import type { ZodSchema } from 'zod';
import type { ButtonProps } from '@mui/material';

interface IFormProps<T extends FieldValues> {
  validation?: ZodSchema<T>;
  onSubmit?: SubmitHandler<T>;
  children: ReactElement<TFormField<T>> | ReactElement<TFormField<T>>[];
  buttonColor?: ButtonProps['color'];
}

const { elementMaxMobileWidth, elementMaxWidth } = globalStyles;

export const Form = <T extends FieldValues>({
  validation,
  onSubmit,
  children,
  buttonColor = 'additional',
}: IFormProps<T>) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, submitCount, isValid, isDirty },
  } = useForm<T>({
    resolver: validation && zodResolver(validation),
  });

  const handleSpaces = (fieldName: Path<T>) => {
    setValue(fieldName, getValues(fieldName).trim());
  };

  return (
    <Stack
      component="form"
      sx={{
        m: '0 auto',
        width: '100%',
        maxWidth: { xs: elementMaxMobileWidth, md: elementMaxWidth },
        gap: 3,
      }}
    >
      <>
        {Children.map(children, (child) => {
          if (child.type === FileFormField) {
            return cloneElement(child, { control });
          } else {
            return cloneElement(child, {
              control,
              onBlur: () => handleSpaces(child.props.name as Path<T>),
            });
          }
        })}

        <Button
          type="submit"
          variant="text"
          color={buttonColor}
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
