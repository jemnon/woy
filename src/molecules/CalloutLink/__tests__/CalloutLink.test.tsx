import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import CalloutLink from '../CalloutLink';
import theme from '../../../theme';

describe('<CalloutLink />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <CalloutLink>Callout Link</CalloutLink>
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(CalloutLink).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
