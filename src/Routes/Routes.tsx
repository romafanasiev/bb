import { Routes, Route } from 'react-router-dom';

import { routes } from 'Constants';
import { LogInPage, SignUpPage } from 'Pages';
import { SecondaryLayout } from 'Layouts';

import { PrivateRoutes } from './PrivateRoutes';

const { signUp, logIn } = routes;

export const Routing = () => (
  <Routes>
    <Route element={<PrivateRoutes />}>
      <Route path="home" element={<h1>Home page</h1>} />
    </Route>

    <Route element={<SecondaryLayout />}>
      <Route path={logIn} element={<LogInPage />} />
      <Route path={signUp} element={<SignUpPage />} />
    </Route>
  </Routes>
);
