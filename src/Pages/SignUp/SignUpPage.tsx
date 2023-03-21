import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormField } from 'Components';
import { formFieldNames } from 'Constants';
import { signUpValidation } from 'Utils/validation';

const { email, nickname, password } = formFieldNames;

export const SignUpPage = () => {
  const { control } = useForm({
    resolver: yupResolver(signUpValidation),
    mode: 'onChange',
    delayError: 700,
  });

  return (
    <Box component="form">
      <FormField
        name={email}
        control={control}
        placeholder="email"
        type="email"
      />
      <FormField name={nickname} control={control} placeholder="Nickname" />
      <FormField
        name={password}
        control={control}
        placeholder="password"
        type="password"
      />
      <Button type="submit">submit</Button>
    </Box>
  );
};
