import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import MobileButton from '../MobileButton';
import theme from '../../../theme';

describe('<MobileButton />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <MobileButton />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(MobileButton).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});