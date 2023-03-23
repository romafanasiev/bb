import { InputAdornment, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import { globalStyles } from 'Constants';

import type { TTextInputProps } from 'Types';

export const TextInput = ({
  error,
  value,
  isSubmitted,
  onChange,
  onBlur,
  helperText,
  ...rest
}: TTextInputProps) => (
  <TextField
    fullWidth
    {...rest}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    error={!!error}
    helperText={helperText}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          {!error && isSubmitted && (
            <CheckIcon sx={{ color: globalStyles.additionalColor }} />
          )}
          {error && isSubmitted && <ClearIcon />}
        </InputAdornment>
      ),
    }}
  />
);
