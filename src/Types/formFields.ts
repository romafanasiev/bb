import { formFieldNames } from 'Constants';

export type TFormField = (typeof formFieldNames)[keyof typeof formFieldNames];
