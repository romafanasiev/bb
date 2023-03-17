import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { Stack, Slider } from '@mui/material';
import { FC, useState } from 'react';

interface VolumeControlProps {
  handleVolume: (value: number) => void;
}

export const VolumeControl: FC<VolumeControlProps> = ({ handleVolume }) => {
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
