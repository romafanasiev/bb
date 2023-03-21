import * as yup from 'yup';

import { formFieldNames, errorMessages } from 'Constants';

const { email, nickname, password } = formFieldNames;
const { requiredField, maximumLength, passwordFormat: passErr } = errorMessages;

const emailValidation = yup
  .string()
  .required(requiredField)
  .matches(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/, email);

const NicknameValidation = yup
  .string()
  .required(requiredField)
  .min(2, 'Please enter minimum 2 symbols')
  .max(32, maximumLength)
  .matches(/^[a-zA-Z]+$/, 'Please use only English letters');

const passwordValidation = yup
  .string()
  .required(requiredField)
  .min(8, 'Please enter minimum 8 symbols')
  .max(32, maximumLength)
  .matches(
    /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    passErr,
  );

export const signUpValidation = yup.object().shape({
  [email]: emailValidation,
  [nickname]: NicknameValidation,
  [password]: passwordValidation,
});
