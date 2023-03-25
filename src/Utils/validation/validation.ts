import { z } from 'zod';

import { formFieldNames, errorMessages } from 'Constants';

const { email, nickname, password } = formFieldNames;
const {
  requiredField,
  maximumLength,
  passwordFormat: passErr,
  emailFormat,
} = errorMessages;

const emailValidation = z
  .string({ required_error: requiredField })
  .trim()
  .email({ message: emailFormat });

const nicknameValidation = z
  .string({ required_error: requiredField })
  .trim()
  .min(2, { message: 'Please enter minimum 2 symbols' })
  .max(32, maximumLength)
  .regex(/^[a-zA-Z]+$/, { message: 'Please use only English letters' });

const passwordValidation = z
  .string({ required_error: requiredField })
  .trim()
  .min(8, { message: 'Please enter minimum 8 symbols' })
  .max(32, { message: maximumLength })
  .regex(
    /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    { message: passErr },
  );

export const signUpValidation = z.object({
  [email]: emailValidation,
  [nickname]: nicknameValidation,
  [password]: passwordValidation,
});

export const loginValidation = z.object({
  [email]: emailValidation,
  [nickname]: nicknameValidation,
});
