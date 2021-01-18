import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { H1, H2, H3, H4, H5, H6 } from '../Headings';
import theme from '../../../theme';

describe('<Headings />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <H1 />
      <H2 />
      <H3 />
      <H4 />
      <H5 />
      <H6 />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(H1).toBeDefined();
    expect(H2).toBeDefined();
    expect(H3).toBeDefined();
    expect(H4).toBeDefined();
    expect(H5).toBeDefined();
    expect(H6).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
