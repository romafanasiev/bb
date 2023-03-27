import { Form, FormField } from 'Components';
import { formFieldNames } from 'Constants';
import { signUpValidation } from 'Utils/validation';
import { createAuthUserWithEmailAndPassword } from 'Api';
import { useAlertMessageContext, useUserContext } from 'Hooks';

import type { TSignUpForm } from 'Types';

const { email, nickname, password } = formFieldNames;

export const SignUpPage = () => {
  const { setUserData } = useUserContext();
  const { setNewMessage } = useAlertMessageContext();
  const onSubmit = async (data: TSignUpForm) => {
    try {
      const user = await createAuthUserWithEmailAndPassword(data);
      setUserData(user);
    } catch (error) {
      if (error instanceof Error) {
        setNewMessage({ text: error.message, severity: 'error' });
      }
    }
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
