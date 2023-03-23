import { Stack } from '@mui/material';

import { globalStyles } from 'Constants';

import type { ITrack } from 'Types';

interface Props {
  track: ITrack;
}

export const DisplayInfo = ({ track }: Props) => (
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
