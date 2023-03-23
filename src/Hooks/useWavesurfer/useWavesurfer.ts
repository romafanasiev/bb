import { useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { globalStyles } from 'Constants';

import type { ITrack } from 'Types';

const { white, secondary } = globalStyles;

export const useWavesurfer = (track: ITrack, container: string) => {
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container,
      waveColor: white,
      progressColor: secondary,
      barWidth: 3,
      barRadius: 2,
      hideScrollbar: true,
      responsive: true,
      skipLength: 10,
      height: 90,
      cursorColor: 'transparent',
    });

    wavesurfer.load(track.src);

    wavesurfer.on('ready', () => {
      setWaveSurfer(wavesurfer);
      wavesurfer.setVolume(0.5);
    });

    return () => wavesurfer.destroy();
  }, [track, container]);

  return waveSurfer;
};
