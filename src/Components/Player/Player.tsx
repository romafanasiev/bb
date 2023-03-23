import { Stack } from '@mui/material';

import { Portal } from 'Components';
import { containersIds } from 'Constants';
import { useWavesurfer } from 'Hooks/useWavesurfer/useWavesurfer';

import { playerStyles } from './playerStyles';
import { Controls } from './components/Controls';
import { DisplayInfo } from './components/DisplayInfo';
import { VolumeControl } from './components/VolumeControl';

import type { ITrack, TContainer } from 'Types';

interface Props {
  track: ITrack;
  progressbarWrapperId: TContainer;
}

const { wrapper } = playerStyles;

export const Player = ({ track, progressbarWrapperId }: Props) => {
  const waveSurferRef = useWavesurfer(track, `#${progressbarWrapperId}`);

  if (waveSurferRef === null) {
    return null;
  }

  return (
    <Portal wrapperId={containersIds.player}>
      <Stack sx={wrapper} justifyContent="space-between" flexDirection="row">
        <DisplayInfo track={track} />
        <Controls
          handlePlay={() => waveSurferRef.playPause()}
          hadnleBackward={() => waveSurferRef.skipBackward()}
          handleForward={() => waveSurferRef.skipForward()}
        />
        <VolumeControl
          handleVolume={(value: number) => waveSurferRef.setVolume(value)}
        />
      </Stack>
    </Portal>
  );
};
