import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Stack from '../Stack';
import theme from '../../../theme';

describe('<Stack />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Stack />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Stack).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});