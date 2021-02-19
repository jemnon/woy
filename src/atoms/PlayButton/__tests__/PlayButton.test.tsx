import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import PlayButton from '../PlayButton';
import theme from '../../../theme';

describe('<PlayButton />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <PlayButton />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(PlayButton).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});