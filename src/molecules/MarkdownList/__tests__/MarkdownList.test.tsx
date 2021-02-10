import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import MarkdownList from '../MarkdownList';
import theme from '../../../theme';

describe('<MarkdownList />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <MarkdownList />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(MarkdownList).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});