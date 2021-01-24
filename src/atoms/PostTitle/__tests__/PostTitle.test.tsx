import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import PostTitle from '../PostTitle';
import theme from '../../../theme';

describe('<PostTitle />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <PostTitle>Filipino Pork Adobo</PostTitle>
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(PostTitle).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
