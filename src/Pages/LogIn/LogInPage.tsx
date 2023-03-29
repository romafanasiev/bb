import { Form, PassFormField, TextFormField } from 'Components';
import { formFieldNames } from 'Constants';
import { loginValidation } from 'Utils/validation';
import { useLogin } from 'Hooks';
import { inputStyles } from 'Styles';

import type { TLoginForm } from 'Types';

export const LogInPage = () => {
  const login = useLogin();

  const onSubmit = (data: TLoginForm) => {
    login.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Form onSubmit={onSubmit} validation={loginValidation}>
      <TextFormField
        name={formFieldNames.email}
        label="Email"
        sx={inputStyles}
      />
      <PassFormField
        name={formFieldNames.password}
        label="Password"
        sx={inputStyles}
      />
    </Form>
  );
};
