import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import RecipeMeta from '../RecipeMeta';
import theme from '../../../theme';

describe('<RecipeMeta />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <RecipeMeta cookTime="10 minutes" servings="10 ounces" />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(RecipeMeta).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
