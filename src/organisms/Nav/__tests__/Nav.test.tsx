import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Nav from '../Nav';
import theme from '../../../theme';

describe('<Nav />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Nav).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});