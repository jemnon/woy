import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import PinButton from '../PinButton';
import theme from '../../../theme';

describe('<PinButton />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <PinButton />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(PinButton).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});