import { useAuthUser } from '@react-query-firebase/auth';
import { Outlet, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { routes } from 'Constants';
import { firebaseAuth } from 'Utils/firebase';

export const PrivateRoutes = () => {
  const user = useAuthUser(['user'], firebaseAuth);

  if (user.isLoading) {
    return <CircularProgress sx={{ m: 'auto' }} />;
  }

  return user.data ? <Outlet /> : <Navigate to={routes.logIn} />;
};
