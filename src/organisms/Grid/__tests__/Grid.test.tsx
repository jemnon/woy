import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Grid from '../Grid';
import theme from '../../../theme';

describe('<Grid />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Grid columns={1}>Grid Child</Grid>
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(Grid).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
