import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Carousel from '../Carousel';
import theme from '../../../theme';

describe('<Carousel />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Carousel>
        <div style={{ width: '100px', height: '200px' }} />
        <div style={{ width: '100px', height: '200px' }} />
        <div style={{ width: '100px', height: '200px' }} />
        <div style={{ width: '100px', height: '200px' }} />
      </Carousel>
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(Carousel).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
