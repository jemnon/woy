import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Newsletter from '../Newsletter';
import theme from '../../../theme';

describe('<Newsletter />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Newsletter />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Newsletter).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});