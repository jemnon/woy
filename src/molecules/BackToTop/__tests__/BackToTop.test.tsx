import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import BackToTop from '../BackToTop';
import theme from '../../../theme';

describe('<BackToTop />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <BackToTop />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(BackToTop).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});