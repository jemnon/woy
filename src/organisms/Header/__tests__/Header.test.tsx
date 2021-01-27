import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import theme from '../../../theme';

describe('<Header />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Header).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});