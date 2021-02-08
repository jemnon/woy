import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Hero from '../Hero';
import theme from '../../../theme';

describe('<Hero />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(Hero).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
