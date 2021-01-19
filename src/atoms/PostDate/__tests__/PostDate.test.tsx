import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import PostDate from '../PostDate';
import theme from '../../../theme';

describe('<PostDate />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <PostDate publishDate="2021-01-15T00:00-08:00" />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(PostDate).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
