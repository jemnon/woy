import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import PrintButton from '../PrintButton';
import theme from '../../../theme';

describe('<PrintButton />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <PrintButton />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(PrintButton).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});