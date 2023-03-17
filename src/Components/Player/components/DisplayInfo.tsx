import { FC } from 'react';
import { Stack } from '@mui/material';

import { ITrack } from 'Types';
import { globalStyles } from 'Constants';

interface DisplayInfoProps {
  track: ITrack;
}

export const DisplayInfo: FC<DisplayInfoProps> = ({ track }) => (
  <Stack
    flexDirection="row"
    gap={2}
    alignItems="center"
    sx={{ '> img': { height: globalStyles.playerHeight } }}
  >
    <img src={track.thumbnail} alt="audio cover" />
    <p>{track.title}</p>
  </Stack>
);
