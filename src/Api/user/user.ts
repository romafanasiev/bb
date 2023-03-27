import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

import { TSignUpForm } from 'Types';
import { firebaseAuth } from 'Utils/firebase';
import { errorMessages } from 'Constants';

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
      throw new Error(error.message);
    }
    throw new Error(errorMessages.connectionErr);
  }
};
