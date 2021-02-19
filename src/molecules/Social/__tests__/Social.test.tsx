import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Social from '../Social';
import theme from '../../../theme';

describe('<Social />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Social />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Social).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});