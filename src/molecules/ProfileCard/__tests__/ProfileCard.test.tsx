import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import ProfileCard from '../ProfileCard';
import theme from '../../../theme';

describe('<ProfileCard />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <ProfileCard
        description="I get down on making all sorts of eats"
        image="https://images.ctfassets.net/lz7g6u6kccw7/2PXqIKP4gcdBKWQ4sUuqaa/c4ea960704b036c285cd6061400c447e/IMG_6D21ECE4038E-1.jpeg?h=250"
      />
    </ThemeProvider>,
  );
  it('exists', (): void => {
    expect(ProfileCard).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
