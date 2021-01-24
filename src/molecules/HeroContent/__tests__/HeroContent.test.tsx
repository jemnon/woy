import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import HeroContent from '../HeroContent';
import theme from '../../../theme';

describe('<HeroContent />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <HeroContent title="Hero Title" />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(HeroContent).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
