import { globalStyles } from 'Constants';

const { white, additionalColor } = globalStyles;

export const inputStyles = {
  '& > label': {
    color: additionalColor,
    '&.Mui-focused': {
      color: additionalColor,
    },
  },
  '.MuiInputBase-colorPrimary': {
    color: white,
  },
  '& fieldset': {
    borderColor: `${additionalColor} !important`,
  },
};
