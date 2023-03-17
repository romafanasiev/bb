import { Drawer } from '@mui/material';

import type { DrawerProps } from '@mui/material/Drawer';

export const Sidebar = (props: DrawerProps) => (
  <Drawer anchor="right" {...props}>
    Menu
  </Drawer>
);
