import { Form, FormField } from 'Components';
import { formFieldNames } from 'Constants';
import { signUpValidation } from 'Utils/validation';

const { email, nickname, password } = formFieldNames;

export const SignUpPage = () => {
  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('submitted');
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
