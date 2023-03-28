import { Form, FormField } from 'Components';
import { formFieldNames } from 'Constants';
import { signUpValidation } from 'Utils/validation';
import { useSignUp } from 'Hooks';

import type { TSignUpForm } from 'Types';

const { email, nickname, password } = formFieldNames;

export const SignUpPage = () => {
  const createUser = useSignUp();

  const onSubmit = (data: TSignUpForm) => {
    createUser.mutate({
      email: data.email,
      password: data.password,
      nickname: data.nickname,
    });
  };

  return (
    <Form onSubmit={onSubmit} validation={signUpValidation}>
      <FormField name={email} type="email" sx={{ mt: 2 }} label="Email" />
      <FormField name={nickname} label="Nickname" />
      <FormField
        name={password}
        label="Password"
        type="password"
        withPassCheck
      />
    </Form>
  );
};
