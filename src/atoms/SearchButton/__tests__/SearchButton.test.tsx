import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import SearchButton from '../SearchButton';
import theme from '../../../theme';

describe('<SearchButton />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <SearchButton />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(SearchButton).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});