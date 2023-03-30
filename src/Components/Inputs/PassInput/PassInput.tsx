import { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { PassCheck } from './PassCheck';

import type { TPassInputProps } from 'Types';

export const PassInput = ({
  error,
  value,
  onChange,
  onBlur,
  helperText,
  withPassCheck = false,
  type = 'password',
  ...rest
}: TPassInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  return (
    <div>
      <TextField
        fullWidth
        {...rest}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={!!error}
        helperText={helperText}
        type={!isVisible ? type : 'text'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleVisibility}>
              {isVisible && !!value && <VisibilityIcon />}
              {!isVisible && !!value && <VisibilityOffIcon />}
            </InputAdornment>
          ),
        }}
      />
      {withPassCheck && <PassCheck value={value} />}
    </div>
  );
};
