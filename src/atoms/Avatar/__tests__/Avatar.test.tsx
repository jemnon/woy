import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Avatar from '../Avatar';
import theme from '../../../theme';

describe('<Avatar />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Avatar />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Avatar).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});