import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import JumpToRecipeButton from '../JumpToRecipeButton';
import theme from '../../../theme';

describe('<JumpToRecipeButton />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <JumpToRecipeButton />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(JumpToRecipeButton).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});