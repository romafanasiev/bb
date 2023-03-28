import {
  useAuthCreateUserWithEmailAndPassword,
  useAuthUpdateProfile,
} from '@react-query-firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { firebaseAuth } from 'Utils/firebase';
import { errorMessages, routes, messages } from 'Constants';
import { useAlertMessageContext } from 'Hooks';

import type { TSignUpForm } from 'Types';
import type { AuthError } from 'firebase/auth';

const { signUpErr, connectionErr } = errorMessages;

export const useSignUp = () => {
  const { setNewMessage } = useAlertMessageContext();
  const navigate = useNavigate();

  const updateUser = useAuthUpdateProfile();
  const createUser = useAuthCreateUserWithEmailAndPassword(firebaseAuth);

  const createAndUpdateUser = useMutation(
    async (data: TSignUpForm) => {
      const res = await createUser.mutateAsync({
        email: data.email,
        password: data.password,
      });

      await updateUser.mutateAsync({
        user: res.user,
        displayName: data.nickname,
      });

      return res;
    },
    {
      onError: (error: AuthError) => {
        if (error.code === 'auth/email-already-in-use') {
          setNewMessage({ text: signUpErr, severity: 'error' });
        } else {
          setNewMessage({ text: connectionErr, severity: 'error' });
        }
      },
      onSuccess: () => {
        setNewMessage({ text: messages.congratulation, severity: 'success' });
        navigate(routes.root);
      },
    },
  );

  return createAndUpdateUser;
};
