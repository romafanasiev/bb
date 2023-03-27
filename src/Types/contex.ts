import type { AlertColor } from '@mui/material/Alert';
import type { User } from 'firebase/auth';

export interface TAlertMessage {
  text: string;
  severity: AlertColor;
}

export interface TAlertMessageContext {
  message: TAlertMessage;
  setNewMessage: (message: TAlertMessage) => void;
}

export interface TUserContext {
  user: User | null;
  setUserData: (user: User) => void;
}
