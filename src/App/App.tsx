import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { Routing } from 'Routes';
import { theme } from 'Theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </ThemeProvider>
);
