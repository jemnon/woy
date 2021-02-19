import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Eyebrow from '../Eyebrow';
import theme from '../../../theme';

describe('<Eyebrow />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Eyebrow />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Eyebrow).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});