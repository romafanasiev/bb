import { formFieldNames } from 'Constants';

const { email, nickname, password } = formFieldNames;

export interface TLoginForm {
  [email]: string;
  [password]: string;
}

export type TSignUpForm = TLoginForm & {
  [nickname]: string;
};
