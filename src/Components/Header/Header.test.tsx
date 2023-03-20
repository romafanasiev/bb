import { render } from 'Utils/tests/test-utils';
import { Header } from 'Components';

describe('Header tests', () => {
  it('header is visible', () => {
    render(<Header />);
  });
});
