import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Rating from '../Rating';
import theme from '../../../theme';

describe('<Rating />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Rating />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Rating).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});