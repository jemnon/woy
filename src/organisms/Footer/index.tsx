import React, { FC } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import Container from '../Container';
import Grid, { GridCell } from '../Grid';
import Stack, { StackItem } from '../Stack';
import NewsletterForm from '../../molecules/NewsletterForm';
import Social from '../../molecules/Social';
import Link from '../../atoms/Link';
import Text from '../../atoms/Text';
import useBreakpoint from '../../hooks/useBreakpoint';

const FooterContainer = styled.footer`
  position: relative;

  overflow: hidden;

  color: ${({ theme }): string => theme.colors.white};
  background-color: ${({ theme }): string => theme.colors.orange};
`;

const FooterContent = styled.div<{ fontWeight: any }>`
  padding-top: ${({ theme: { spacing } }): string => spacing.md4};
  padding-bottom: ${({ theme: { spacing } }): string => spacing.md4};
`;

const FooterLink = styled(Link)`
  display: block;

  font-family: ${({ theme: { fonts } }): string => fonts.lato};
  font-size: ${({ theme: { fontSizes } }): string => fontSizes['f-sm']};
  font-style: normal;
  font-weight: bold;

  ${up('md')} {
    font-size: ${({ theme: { fontSizes } }): string => fontSizes.f1};
  }

  color: ${({ theme: { colors } }): string => colors.white};
  &:hover {
    color: ${({ theme: { colors } }): string => colors.white};
  }

  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm1};
  &:last-child {
    margin-bottom: 0;
  }
`;

const Footer: FC = () => {
  const breakpoint = useBreakpoint();
  return (
    <FooterContainer>
      <FooterContent as={Container} hasTopMargin={false}>
        <Stack bottomSpacing="sp-0">
          <StackItem bottomSpacing="md4">
            <Social colorTheme="light" />
          </StackItem>
          <StackItem bottomSpacing="md4">
            <Grid columns={12} rowGap="md4" gap="sp-0">
              <GridCell width={breakpoint === 'desktop' ? 3 : 6}>
                <Text
                  bottomSpacing="sm1"
                  fontSize={breakpoint === 'desktop' ? 'f-sm' : 'f-xsm'}
                  textColor="white"
                  textTransform="uppercase"
                  letterSpacing="0.05em"
                >
                  Info
                </Text>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/posts/1">Recipes</FooterLink>
                <FooterLink to="mailto:whisperofyum@gmail.com" target="_top">
                  Contact
                </FooterLink>
                <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              </GridCell>
              <GridCell width={breakpoint === 'desktop' ? 3 : 6}>
                <Text
                  bottomSpacing="sm1"
                  fontSize={breakpoint === 'desktop' ? 'f-sm' : 'f-xsm'}
                  textColor="white"
                  textTransform="uppercase"
                  letterSpacing="0.05em"
                >
                  Built With
                </Text>
                <FooterLink to="https://www.gatsbyjs.com/" target="_blank">
                  GatsbyJS
                </FooterLink>
                <FooterLink to="https://www.contentful.com/" target="_blank">
                  Contentful CMS
                </FooterLink>
                <FooterLink to="https://www.algolia.com/" target="_blank">
                  Algolia Search
                </FooterLink>
              </GridCell>
              <GridCell width={breakpoint === 'desktop' ? 6 : 12}>
                <Text
                  bottomSpacing="sm1"
                  fontSize={breakpoint === 'desktop' ? 'f-sm' : 'f-xsm'}
                  textColor="white"
                  textTransform="uppercase"
                  letterSpacing="0.05em"
                >
                  Subscribe to our newsletter
                </Text>
                <NewsletterForm borderColor="white" />
              </GridCell>
            </Grid>
          </StackItem>
          <StackItem bottomSpacing="sm1">
            <Text
              fontSize={breakpoint === 'desktop' ? 'f1' : 'f-sm'}
              textColor="white"
              textAlign="center"
            >
              &copy; 2021 Whisper of Yum All Rights Reserved
            </Text>
          </StackItem>
          <StackItem>
            <Link
              to="https://www.linkedin.com/in/david-arias-b79a706/"
              target="_blank"
            >
              <Text
                fontSize={breakpoint === 'desktop' ? 'f1' : 'f-sm'}
                fontWeight="normal"
                textAlign="center"
                textColor="white"
                textDecoration="underline"
              >
                Designed and Developed by David Arias
              </Text>
            </Link>
          </StackItem>
        </Stack>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
