import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // eslint-disable-next-line no-console
    console.log(res);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
