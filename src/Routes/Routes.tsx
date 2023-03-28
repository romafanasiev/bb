import { Routes, Route } from 'react-router-dom';

import { routes } from 'Constants';
import { LogInPage, SignUpPage, AddTrack } from 'Pages';
import { MainLayout, SecondaryLayout } from 'Layouts';

import { PrivateRoutes } from './PrivateRoutes';

const { signUp, logIn, admin } = routes;

export const Routing = () => (
  <Routes>
    <Route element={<PrivateRoutes />}>
      <Route path={admin} element={<AddTrack />} />
      <Route element={<MainLayout />}></Route>
    </Route>

    <Route element={<SecondaryLayout />}>
      <Route path={logIn} element={<LogInPage />} />
      <Route path={signUp} element={<SignUpPage />} />
      <Route path="*" element={<LogInPage />} />
    </Route>
  </Routes>
);
