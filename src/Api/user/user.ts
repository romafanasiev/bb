import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

import { TSignUpForm } from 'Types';
import { firebaseAuth } from 'Utils/firebase';
import { errorMessages } from 'Constants';

const { signUpErr, connectionErr } = errorMessages;

export const createAuthUserWithEmailAndPassword = async (data: TSignUpForm) => {
  const { nickname, email, password } = data;

  try {
    const res = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );

    if (firebaseAuth.currentUser) {
      await updateProfile(firebaseAuth.currentUser, {
        displayName: nickname,
      });
    }

    return res.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          throw new Error(signUpErr);
        default:
          throw new Error(connectionErr);
      }
    }
    throw new Error(connectionErr);
  }
};
