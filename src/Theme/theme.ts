/* eslint-disable max-lines */
import { createTheme } from '@mui/material';

import { globalStyles } from 'Constants';

const {
  primary,
  secondary,
  white,
  additionalColor,
  headerHeightSm,
  headerHeight,
  mediumFontWeight,
} = globalStyles;

export let theme = createTheme();

theme = createTheme(theme, {
  palette: {
    mode: 'light',
    common: {
      white,
    },
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
      paper: primary,
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '46px',
          fontSize: '0.875rem',
          fontWeight: mediumFontWeight,
          color: white,
          '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: primary,
            borderWidth: '1px',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: mediumFontWeight,
          transform: 'translate(15px, 50%)',
          '&.Mui-focused': {
            color: secondary,
            transform: 'translate(16px, -14px) scale(0.67)',
          },
        },
        shrink: {
          color: secondary,
          transform: 'translate(16px, -14px) scale(0.67)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: additionalColor,
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
