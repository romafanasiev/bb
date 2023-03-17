import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

import { globalStyles } from 'Constants';

const { headerHeightSm, headerHeight } = globalStyles;

export const Wrapper = (props: PropsWithChildren) => (
  <Box
    sx={{
      top: { xs: headerHeightSm, md: headerHeight },
      position: 'relative',
      margin: '0 auto',
      padding: 2,
      maxWidth: '1200px',
    }}
  >
    {props.children}
  </Box>
);
