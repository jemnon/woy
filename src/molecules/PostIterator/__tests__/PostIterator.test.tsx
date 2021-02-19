import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import PostIterator from '../PostIterator';
import theme from '../../../theme';

describe('<PostIterator />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <PostIterator
        next={{
          image: <img src="some-image.jpg" />,
          name: 'Tomato Bisque',
          slug: 'tomato-bisque',
        }}
        prev={{
          image: <img src="some-image.jpg" />,
          name: 'Shrimp Scampi',
          slug: 'shrimp-scampi',
        }}
        onClick={jest.fn}
      />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(PostIterator).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
