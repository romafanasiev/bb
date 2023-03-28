import { useAuthSignInWithEmailAndPassword } from '@react-query-firebase/auth';
import { useNavigate } from 'react-router-dom';

import { firebaseAuth } from 'Utils/firebase';
import { errorMessages, routes, messages } from 'Constants';
import { useAlertMessageContext } from 'Hooks';

const { logInErr, connectionErr } = errorMessages;

export const useLogin = () => {
  const { setNewMessage } = useAlertMessageContext();
  const navigate = useNavigate();

  const login = useAuthSignInWithEmailAndPassword(firebaseAuth, {
    onSuccess: () => {
      setNewMessage({ text: messages.congratulation, severity: 'success' });
      navigate(routes.root);
    },
    onError: (error) => {
      switch (error.code) {
        case 'auth/wrong-password':
          setNewMessage({ text: logInErr, severity: 'error' });
          break;
        case 'auth/user-not-found': {
          setNewMessage({ text: logInErr, severity: 'error' });
          break;
        }
        default:
          setNewMessage({ text: connectionErr, severity: 'error' });
          break;
      }
    },
  });

  return login;
};
