import { createContext, PropsWithChildren, useState } from 'react';

import type { AlertColor } from '@mui/material';
import type { TAlertMessage, TAlertMessageContext } from 'Types';

const initialState = {
  text: '',
  severity: 'success' as AlertColor,
};

export const AlertMessageContext = createContext<TAlertMessageContext | null>(
  null,
);

export const AlertMessageProvider = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState(initialState);

  const setNewMessage = (newMessage: TAlertMessage) => {
    setMessage({ ...newMessage });
  };

  return (
    <AlertMessageContext.Provider value={{ message, setNewMessage }}>
      {children}
    </AlertMessageContext.Provider>
  );
};
