import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Author from '../Author';
import theme from '../../../theme';

describe('<Author />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Author />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Author).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});