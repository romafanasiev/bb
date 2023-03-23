import { useState } from 'react';
import { IconButton, Stack } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';

import { controlsStyles } from './controlStyles';

interface Props {
  handlePlay: () => void;
  handleForward: () => void;
  hadnleBackward: () => void;
}

const { playButton, subButton } = controlsStyles;

export const Controls = ({
  handlePlay,
  handleForward,
  hadnleBackward,
}: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying((prevState) => !prevState);
    handlePlay();
  };

  return (
    <Stack flexDirection="row" alignItems="center">
      <IconButton aria-label="repeat track" sx={subButton}>
        <RepeatIcon sx={{ mr: 2 }} />
      </IconButton>

      <IconButton onClick={hadnleBackward} aria-label="skip backward">
        <Replay10Icon />
      </IconButton>

      <IconButton
        onClick={handlePlayClick}
        aria-label="play button"
        sx={playButton}
      >
        {isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />}
      </IconButton>

      <IconButton onClick={handleForward} aria-label="skip forward">
        <Forward10Icon />
      </IconButton>

      <IconButton aria-label="shuffle playlist" sx={subButton}>
        <ShuffleIcon sx={{ ml: 2 }} />
      </IconButton>
    </Stack>
  );
};
