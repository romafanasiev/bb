import { useEffect } from 'react';
import { Alert } from '@mui/material';

import { useAlertMessageContext } from 'Hooks';

export const AlertMessage = () => {
  const { message, setNewMessage } = useAlertMessageContext();

  useEffect(() => {
    const timeId = setTimeout(() => {
      setNewMessage({ ...message, text: '' });
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [message]);

  if (!message.text) {
    return null;
  }

  return (
    <Alert
      severity={message.severity}
      sx={{
        positon: 'absolute',
        bottom: '20px',
        left: '20px',
        mt: '20px',
        '&.MuiAlert-root': { position: 'absolute' },
        '& > .MuiAlert-icon > svg': {
          color: 'inherit',
        },
      }}
    >
      {message.text}
    </Alert>
  );
};
