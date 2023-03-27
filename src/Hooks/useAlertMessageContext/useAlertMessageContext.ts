import { useContext } from 'react';

import { AlertMessageContext } from 'Context';

import type { TAlertMessageContext } from 'Types';

export const useAlertMessageContext = () => {
  const { message, setNewMessage } = useContext(
    AlertMessageContext,
  ) as TAlertMessageContext;

  return { message, setNewMessage };
};
