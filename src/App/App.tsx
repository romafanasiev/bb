import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AlertMessageProvider } from 'Context';
import { AlertMessage } from 'Module';
import { Routing } from 'Routes';
import { theme } from 'Theme';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AlertMessageProvider>
          <Routing />
          <AlertMessage />
        </AlertMessageProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
