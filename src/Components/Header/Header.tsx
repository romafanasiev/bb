import { AppBar, Stack } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';

import { Logo } from 'Components/Logo';

export const Header = () => (
  <AppBar
    color="primary"
    sx={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      pr: 4,
    }}
  >
    <Logo />

    <nav>
      <Stack
        component="ul"
        direction="row"
        gap={4}
        sx={{
          '> li': {
            display: 'flex',
            gap: 1,
          },
        }}
      >
        <li>About</li>
        <li>Tracks</li>
        <li>FAQ</li>
        <li>Services</li>
        <li>Contact</li>
        <li>
          <ShoppingBagIcon />
          $100.00
        </li>
        <li>
          <PersonIcon />
          Login
        </li>
      </Stack>
    </nav>
  </AppBar>
);
