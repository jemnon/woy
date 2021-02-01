import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Container from '../Container';
import theme from '../../../theme';

describe('<Container />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Container>
        <div style={{ width: '960px', height: '960px' }} />
      </Container>
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(Container).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
