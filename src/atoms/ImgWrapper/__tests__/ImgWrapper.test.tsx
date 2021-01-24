import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import ImgWrapper from '../ImgWrapper';
import theme from '../../../theme';

describe('<ImgWrapper />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <ImgWrapper>
        <img alt="image" src="" />
      </ImgWrapper>
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(ImgWrapper).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
