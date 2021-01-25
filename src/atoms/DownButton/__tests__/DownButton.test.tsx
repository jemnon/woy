import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import DownButton from '../DownButton';
import theme from '../../../theme';

describe('<DownButton />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <DownButton />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(DownButton).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});