import { formFieldNames } from 'Constants';

const {
  email,
  nickname,
  password,
  cover,
  preview,
  fullVersion,
  title,
  bpm,
  tags,
  price,
} = formFieldNames;

export interface TLoginForm {
  [email]: string;
  [password]: string;
}

export type TSignUpForm = TLoginForm & {
  [nickname]: string;
};

export interface TUploadTrackForm {
  [cover]?: File;
  [preview]: File;
  [fullVersion]: File;
  [title]: string;
  [bpm]: string;
  [tags]: string;
  [price]: number;
}
