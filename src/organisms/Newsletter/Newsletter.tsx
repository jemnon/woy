import React, { FC } from 'react';
import styled from 'styled-components';
import Stack, { StackItem } from '../../organisms/Stack';
import NewsletterForm from '../../molecules/NewsletterForm';
import Social from '../../molecules/Social';
import Text from '../../atoms/Text';

interface NewsletterProps {}

const NewsletterContainer = styled.section`
  padding: ${({ theme: { spacing } }): string =>
    `${spacing.md4} ${spacing.sm4}`};

  background-color: ${({ theme: { colors } }): string => colors.nearWhite};
`;

const Newsletter: FC<NewsletterProps> = () => (
  <NewsletterContainer>
    <Stack bottomSpacing="sp-0">
      <StackItem bottomSpacing="sm4">
        <NewsletterForm />
      </StackItem>
      <StackItem bottomSpacing="sm4">
        <Text textAlign="center">Stay up to date with our newsletter.</Text>
      </StackItem>
      <StackItem bottomSpacing="sp-0">
        <Social />
      </StackItem>
    </Stack>
  </NewsletterContainer>
);

export default Newsletter;
