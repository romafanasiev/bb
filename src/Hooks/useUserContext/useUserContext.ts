import { useContext } from 'react';

import { UserContext } from 'Context';

import type { TUserContext } from 'Types';

export const useUserContext = () => {
  const { user, setUserData } = useContext(UserContext) as TUserContext;

  return { user, setUserData };
};
