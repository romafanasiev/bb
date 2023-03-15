import { createTheme } from '@mui/material';

import { globalStyles } from 'Constants';

const {
  primary,
  secondary,
  white,
  additionalColor,
  headerHeightSm,
  headerHeight,
} = globalStyles;

export let theme = createTheme();

theme = createTheme(theme, {
  palette: {
    mode: 'light',
    primary: {
      main: primary,
      contrastText: white,
    },
    secondary: {
      main: secondary,
    },
    background: {
      paper: additionalColor,
      default: primary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // 'box-shadow': 'none',
          [theme.breakpoints.up('md')]: {
            height: headerHeight,
          },
          [theme.breakpoints.down('md')]: {
            height: headerHeightSm,
          },
        },
      },
    },
  },
});
