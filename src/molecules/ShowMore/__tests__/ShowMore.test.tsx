import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import ShowMore from '../ShowMore';
import theme from '../../../theme';

describe('<ShowMore />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <ShowMore />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(ShowMore).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});