import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import MobileMenu from '../MobileMenu';
import theme from '../../../theme';

describe('<MobileMenu />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <MobileMenu isVisible />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(MobileMenu).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
