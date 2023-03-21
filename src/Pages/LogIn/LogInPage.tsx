import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';

import { FormField } from 'Components';

export const LogInPage = () => {
  const { control } = useForm({
    // resolver: yupResolver(),
    mode: 'onChange',
    delayError: 700,
  });

  return (
    <Stack component="form" gap={3} sx={{ width: '100%' }}>
      <FormField name="email" control={control} placeholder="email" />
      <FormField name="password" control={control} placeholder="password" />
    </Stack>
  );
};
