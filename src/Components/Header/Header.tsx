import { AppBar, Box, Drawer, Stack } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import { headerStyles } from './styles';

import { Logo } from 'Components/Logo';

const { appBar, nav, navUl, menu } = headerStyles;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar color="primary" sx={appBar}>
      <Logo />

      <Box component="nav" sx={nav}>
        <Stack component="ul" direction="row" gap={4} sx={navUl}>
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
      </Box>

      <MenuIcon
        onClick={() => setIsOpen((prevState) => !prevState)}
        sx={menu}
      />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        Menu
      </Drawer>
    </AppBar>
  );
};
