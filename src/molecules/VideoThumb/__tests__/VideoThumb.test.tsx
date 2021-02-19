import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import VideoThumb from '../VideoThumb';
import theme from '../../../theme';

describe('<VideoThumb />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <VideoThumb
        image={
          <img src="https://images.ctfassets.net/lz7g6u6kccw7/6UirvdRJtVmSvDZ0jIBMTO/054fe6caf9245d1e580056fe5dcd565e/chili-oil.jpg?w=800&q=50" />
        }
      />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(VideoThumb).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
