import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { TSignUpForm } from 'Types';
import { firebaseAuth } from 'Utils/firebase';

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
    // eslint-disable-next-line no-console
    console.log(res);

    return res.user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
