import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Media from '../Media';
import theme from '../../../theme';

describe('<Media />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Media
        description="media desc"
        image={<img src="some-image.jpg" />}
        publishDate="2021-01-20T00:00-08:00"
        title="Filipino Pork Adobo"
      />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(Media).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
