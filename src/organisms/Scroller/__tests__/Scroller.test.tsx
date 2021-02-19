import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Scroller from '../Scroller';
import theme from '../../../theme';

describe('<Scroller />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Scroller>
        <img alt="image" src="some-img.jpg" />
      </Scroller>
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(Scroller).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
