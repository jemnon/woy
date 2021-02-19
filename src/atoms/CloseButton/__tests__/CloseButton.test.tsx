import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import CloseButton from '../CloseButton';
import theme from '../../../theme';

describe('<CloseButton />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <CloseButton />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(CloseButton).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});