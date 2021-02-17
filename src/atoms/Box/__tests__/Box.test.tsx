import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Box from '../Box';
import theme from '../../../theme';

describe('<Box />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Box />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Box).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});