import { Form, FormField } from 'Components';
import { formFieldNames } from 'Constants';
import { signUpValidation } from 'Utils/validation';
import { createAuthUserWithEmailAndPassword } from 'Api';

import type { TSignUpForm } from 'Types';

const { email, nickname, password } = formFieldNames;

export const SignUpPage = () => {
  const onSubmit = async (data: TSignUpForm) => {
    // eslint-disable-next-line no-console
    const res = await createAuthUserWithEmailAndPassword(data);
    // eslint-disable-next-line no-console
    console.log(res);
  };

  return (
    <Form<TSignUpForm> onSubmit={onSubmit} validation={signUpValidation}>
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
