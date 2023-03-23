import { Form, FormField } from 'Components';
import { formFieldNames } from 'Constants';
import { signUpValidation } from 'Utils/validation';

import type { TLoginForm } from 'Types';

const defaultValues: TLoginForm = {
  email: '',
  password: '',
};

export const LogInPage = () => {
  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('submitted');
  };

  return (
    <Form
      onSubmit={onSubmit}
      validation={signUpValidation}
      defaultValues={defaultValues}
    >
      <FormField name={formFieldNames.email} placeholder="email" />
      <FormField name={formFieldNames.password} placeholder="password" />
    </Form>
  );
};
