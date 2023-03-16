import { globalStyles } from 'Constants';
import { theme } from 'Theme';

export const playerStyles = {
  player: {
    position: 'fixed',
    bottom: 0,
    p: theme.spacing(0, 4, 0, 0),
    width: '100vw',
    height: globalStyles.playerHeight,
    bgcolor: 'background.paper',
    color: 'common.white',
  },
};
