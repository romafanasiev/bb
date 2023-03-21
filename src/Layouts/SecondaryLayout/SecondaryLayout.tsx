import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import { globalStyles } from 'Constants';
import { FullLogo } from 'Components';

const { elementMaxMobileWidth, elementMaxWidth } = globalStyles;

export const SecondaryLayout = () => (
  <Box
    sx={{
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
    }}
  >
    <Stack
      m="0 auto"
      sx={{
        width: { xs: elementMaxMobileWidth, sm: elementMaxWidth },
        minHeight: '100vh',
      }}
      alignItems="center"
      justifyContent="center"
    >
      <FullLogo />
      <Outlet />
    </Stack>
  </Box>
);
