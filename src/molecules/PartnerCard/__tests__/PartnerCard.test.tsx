import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import PartnerCard from '../PartnerCard';
import theme from '../../../theme';

describe('<PartnerCard />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <PartnerCard
        code="WHISPEROFYUM"
        description="Some Desc"
        image={<img src="some-image.jpg" />}
        title="Title"
        url="/"
        onClick={jest.fn()}
      />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(PartnerCard).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
