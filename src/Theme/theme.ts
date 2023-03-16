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
    additional: {
      main: additionalColor,
    },
    background: {
      paper: additionalColor,
      default: additionalColor,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up('md')]: {
            height: headerHeight,
          },
          [theme.breakpoints.down('md')]: {
            height: headerHeightSm,
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: secondary,
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    additional: Palette['primary'];
  }
  interface PaletteOptions {
    additional: PaletteOptions['primary'];
  }
}

// declare module '@mui/material/AppBar' {
//   interface AppBarPropsColorOverrides {
//     additional: true;
//   }
// }
