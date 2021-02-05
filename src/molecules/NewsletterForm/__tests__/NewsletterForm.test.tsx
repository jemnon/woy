import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import NewsletterForm from '../NewsletterForm';
import theme from '../../../theme';

describe('<NewsletterForm />', (): void => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <NewsletterForm />
    </ThemeProvider>
  );
  it('exists', (): void => {
    expect(NewsletterForm).toBeDefined();
  });
  it('renders defaults correctly', (): void => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});