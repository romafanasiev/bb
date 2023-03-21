import { Header, Wrapper, Player } from 'Components';
import { containersIds } from 'Constants';

import demo from '../../Assets/music/demo.wav';
import background from '../../Assets/images/thumbnail.jpg';

const track = {
  title: 'Its a beautiful day',
  src: demo,
  thumbnail: background,
};

export const MainLayout = () => (
  <>
    <Header />
    <Wrapper>
      Main content
      <div id={containersIds.progressBar} />
    </Wrapper>
    <Player track={track} progressbarWrapperId={containersIds.progressBar} />
  </>
);
