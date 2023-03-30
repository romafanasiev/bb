/* eslint-disable max-lines */
import { createTheme } from '@mui/material';

import { globalStyles } from 'Constants';

const {
  primary,
  secondary,
  white,
  additionalColor,
  error,
  headerHeightSm,
  headerHeight,
  regularFontWeight,
  mediumFontWeight,
  boldFontWeight,
  letterSpacing,
  borderRadius,
  elementMaxWidth,
  elementMaxMobileWidth,
  elementHeight,
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
    error: {
      main: error,
    },
    background: {
      paper: primary,
      default: additionalColor,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightRegular: regularFontWeight,
    fontWeightMedium: mediumFontWeight,
    fontWeightBold: boldFontWeight,
    h1: {
      fontWeight: boldFontWeight,
      letterSpacing,
      fontSize: '3.375rem',
      lineHeight: '3.5rem',
    },
    h2: {
      fontWeight: boldFontWeight,
      letterSpacing,
      fontSize: '3rem',
      lineHeight: '3.5rem',
    },
    h3: {
      letterSpacing,
      fontWeight: boldFontWeight,
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
    },
    h4: {
      letterSpacing,
      fontWeight: boldFontWeight,
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    h5: {
      letterSpacing,
      fontWeight: boldFontWeight,
      fontSize: '1.3125rem',
      lineHeight: '1.5rem',
    },
    body1: {
      letterSpacing,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    body2: {
      letterSpacing,
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
    },
    caption: {
      letterSpacing,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('md')]: {
            height: headerHeightSm,
          },
          [theme.breakpoints.up('md')]: {
            height: headerHeight,
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
          height: elementHeight,
          fontSize: '0.875rem',
          fontWeight: mediumFontWeight,
          '& fieldset': {
            borderWidth: '1px',
          },
          '&.MuiInputBase-colorPrimary.Mui-focused fieldset': {
            borderWidth: '1px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius,
        },
        input: {
          '&:-webkit-autofill': {
            borderRadius: '0',
            WebkitBoxShadow: `0 0 0 30px ${primary} inset`,
            WebkitTextFillColor: `${white}`,
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
            transform: 'translate(14px, -8px) scale(0.67)',
          },
          '&.Mui-error': {
            color: error,
          },
          '&.Mui-focused.Mui-error': {
            color: error,
          },
        },
        shrink: {
          transform: 'translate(14px, -8px) scale(0.67)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          maxWidth: elementMaxWidth,
          borderRadius,
          fontWeight: boldFontWeight,
          height: elementHeight,
          '&.MuiButton-text': {
            fontWeight: 700,
            fontSize: '1rem',
            textTransform: 'uppercase',
          },
          '&.MuiButton-contained': {
            borderRadius,
            '&:hover': {
              backgroundColor: primary,
            },
          },
          '&.MuiButton-outlined': {
            borderRadius,
          },
          '&.Mui-disabled': {
            color: error,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('md')]: {
            maxWidth: elementMaxMobileWidth,
          },
          [theme.breakpoints.up('md')]: {
            maxWidth: elementMaxWidth,
          },
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

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    additional: true;
  }
}
