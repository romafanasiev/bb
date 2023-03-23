import { useState } from 'react';
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { Stack, Slider } from '@mui/material';

interface Props {
  handleVolume: (value: number) => void;
}

export const VolumeControl = ({ handleVolume }: Props) => {
  const [volume, setVolume] = useState(0.5);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
    handleVolume(newValue as number);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ mb: 1, width: '200px', display: { xs: 'none', md: 'flex' } }}
      alignItems="center"
    >
      <VolumeDown />
      <Slider
        min={0}
        max={1}
        step={0.05}
        aria-label="Volume"
        value={volume}
        onChange={handleChange}
        color="secondary"
      />
      <VolumeUp />
    </Stack>
  );
};
