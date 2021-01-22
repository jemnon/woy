import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Button from '../Button';
import theme from '../../../theme';

describe('<Button />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(Button).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});