import { SvgIcon } from '@mui/material';

import { FullLogoIcon } from 'Assets';

export const FullLogo = () => (
  <SvgIcon
    component={FullLogoIcon}
    inheritViewBox
    sx={{ height: '280px', width: '280px' }}
  />
);
