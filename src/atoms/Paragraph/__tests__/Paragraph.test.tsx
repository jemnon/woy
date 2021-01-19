import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Paragraph from '../Paragraph';
import theme from '../../../theme';

describe('<Paragraph />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Paragraph />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Paragraph).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});