import { Form, TextFormField, PassFormField } from 'Components';
import { formFieldNames } from 'Constants';
import { signUpValidation } from 'Utils/validation';
import { useSignUp } from 'Hooks';
import { inputStyles } from 'Styles';

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
      <TextFormField
        name={email}
        type="email"
        sx={{ mt: 2, ...inputStyles }}
        label="Email"
      />
      <TextFormField name={nickname} label="Nickname" sx={inputStyles} />
      <PassFormField
        name={password}
        label="Password"
        sx={inputStyles}
        withPassCheck
      />
    </Form>
  );
};
