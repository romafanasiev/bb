import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import { globalStyles } from 'Constants';

const { maxWidth } = globalStyles;

export const SecondaryLayout = () => (
  <Box
    sx={{
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
    }}
  >
    <Stack
      m="0 auto"
      sx={{ maxWidth, minHeight: '100vh' }}
      alignItems="center"
      justifyContent="center"
    >
      <Outlet />
    </Stack>
  </Box>
);
