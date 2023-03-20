import { Routes, Route } from 'react-router-dom';

import { ROUTES } from 'Constants';
import { LogInPage, SignUpPage } from 'Pages';
import { SecondaryLayout } from 'Layouts';

const { signUp, logIn } = ROUTES;

export const Routing = () => (
  <Routes>
    <Route element={<SecondaryLayout />}>
      <Route path={logIn} element={<LogInPage />} />
      <Route path={signUp} element={<SignUpPage />} />
    </Route>
  </Routes>
);
