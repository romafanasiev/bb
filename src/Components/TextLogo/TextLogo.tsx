import { SvgIcon } from '@mui/material';

import { TextLogoIcon } from 'Assets';

export const TextLogo = () => (
  <SvgIcon
    component={TextLogoIcon}
    inheritViewBox
    sx={{ height: '60px', width: '300px' }}
  />
);
