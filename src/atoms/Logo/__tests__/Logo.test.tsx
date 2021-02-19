import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Logo from '../Logo';
import theme from '../../../theme';

describe('<Logo />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Logo />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Logo).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});