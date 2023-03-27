import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { AlertMessageProvider, UserProvider } from 'Context';
import { AlertMessage } from 'Module';
import { Routing } from 'Routes';
import { theme } from 'Theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <UserProvider>
        <AlertMessageProvider>
          <Routing />
          <AlertMessage />
        </AlertMessageProvider>
      </UserProvider>
    </BrowserRouter>
  </ThemeProvider>
);
