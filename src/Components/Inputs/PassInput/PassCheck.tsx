import { Stack, Typography } from '@mui/material';

import { regExp } from 'Constants';

import { ConditionCheck } from './ConditionCheck';

const { uppercase, lowercase, digit, specialChar } = regExp;

export const PassCheck = ({ value = '' }: { value: string }) => {
  const valueLength = value.length >= 8;
  const upperCaseCheck = uppercase.test(value);
  const lowerCaseCheck = lowercase.test(value);
  const digitCheck = digit.test(value);
  const specialCharChek = specialChar.test(value);

  if (value) {
    return (
      <Stack
        direction="row"
        sx={{ flexWrap: 'wrap', mt: 2 }}
        gap={2}
        rowGap="0"
      >
        <ConditionCheck condition={valueLength} description="8+ characters" />
        <ConditionCheck condition={upperCaseCheck} description="1 uppercase" />
        <ConditionCheck condition={lowerCaseCheck} description="1 lowercase" />
        <ConditionCheck condition={digitCheck} description="1 digit" />
        <ConditionCheck
          condition={specialCharChek}
          description="1 special character"
        />
      </Stack>
    );
  }

  return (
    <Typography
      sx={{ mt: 2, display: 'inline-block' }}
      variant="caption"
      fontWeight="medium"
    >
      8+ characters 1 uppercase, 1 lowercase, 1 digit and 1 special character
    </Typography>
  );
};
