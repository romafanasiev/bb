import { Form, FormField } from 'Components';
import { formFieldNames } from 'Constants';
import { loginValidation } from 'Utils/validation';
import { useLogin } from 'Hooks';

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
      <FormField name={formFieldNames.email} placeholder="email" />
      <FormField
        name={formFieldNames.password}
        placeholder="password"
        type="password"
      />
    </Form>
  );
};
