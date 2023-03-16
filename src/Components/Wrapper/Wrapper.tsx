import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

import { globalStyles } from 'Constants';

const { headerHeightSm, headerHeight } = globalStyles;

export const Wrapper = (props: PropsWithChildren) => (
  <Box
    sx={{
      top: { xs: headerHeightSm, md: headerHeight },
      position: 'relative',
    }}
  >
    {props.children}
  </Box>
);
