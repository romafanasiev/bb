import { Box } from '@mui/material';

import { playerStyles } from './playerStyles';

import { Portal } from 'Components';

const { player } = playerStyles;

export const Player = () => (
  <Portal wrapperId="player">
    <Box sx={player}>Player</Box>
  </Portal>
);
