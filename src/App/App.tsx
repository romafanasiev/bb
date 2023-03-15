import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from 'Theme';
import { MainLayout } from 'Layouts';

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MainLayout />
  </ThemeProvider>
);
