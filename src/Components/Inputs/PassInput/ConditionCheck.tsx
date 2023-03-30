import { Stack, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import { globalStyles } from 'Constants';

interface Props {
  condition: boolean;
  description: string;
}

const { additionalColor, error } = globalStyles;

export const ConditionCheck = ({ condition, description }: Props) => {
  const styles = { height: '16px', width: '16px' };

  return (
    <Stack flexDirection="row" gap={1}>
      <Typography variant="caption" fontWeight="medium">
        {description}
      </Typography>{' '}
      {condition ? (
        <CheckIcon sx={{ ...styles, color: additionalColor }} />
      ) : (
        <ClearIcon sx={{ ...styles, color: error }} />
      )}
    </Stack>
  );
};
