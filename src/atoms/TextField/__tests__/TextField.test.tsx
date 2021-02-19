import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import TextField from '../TextField';
import theme from '../../../theme';

describe('<TextField />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <TextField placeholder="email" />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(TextField).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
