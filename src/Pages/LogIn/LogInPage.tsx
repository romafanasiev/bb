import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';

import { FormField, FullLogo } from 'Components';
import { globalStyles } from 'Constants';

const { elementWidth, elementMobileWidth } = globalStyles;

export const LogInPage = () => {
  const { control } = useForm({
    // resolver: yupResolver(),
    mode: 'onChange',
    delayError: 700,
  });

  return (
    <>
      <FullLogo />
      <Box
        component="form"
        sx={{ width: { xs: elementMobileWidth, sm: elementWidth } }}
      >
        <FormField name="email" control={control} placeholder="email" />
        <FormField name="password" control={control} placeholder="password" />
      </Box>
    </>
  );
};
