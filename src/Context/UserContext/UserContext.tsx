import { createContext, PropsWithChildren, useState } from 'react';

import type { User } from 'firebase/auth';
import type { TUserContext } from 'Types';

export const UserContext = createContext<TUserContext | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const setUserData = (user: User) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
