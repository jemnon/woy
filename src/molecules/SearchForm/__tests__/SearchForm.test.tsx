import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import SearchForm from '../SearchForm';
import theme from '../../../theme';

describe('<SearchForm />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <SearchForm onChange={jest.fn()} />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(SearchForm).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
