import { SvgIcon } from '@mui/material';

import { LogoIcon } from 'Assets';

export const Logo = () => (
  <SvgIcon
    component={LogoIcon}
    inheritViewBox
    sx={{ height: '60px', width: '300px' }}
  />
);
