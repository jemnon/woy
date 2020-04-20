import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../components/container-styled';
import { H1 } from '../components/headings-styled';
import { HEADER_HEIGHT } from '../components/Header';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import Link from '../components/Link';
import SEO from '../components/SEO';

const NotFoundLink = styled.a`
  color: ${({ theme }): string => theme.colors.orange};
`;

const NotFoundPage: FC = () => (
  <Layout>
    <SEO
      description="Recipes, Cooking, and Los Angeles"
      title="Whisper of Yum | Recipes, Cooking, and Los Angeles"
      meta={[
        {
          name: 'whipser of yum',
          content: 'Recipes, Cooking, and Los Angeles',
        },
      ]}
    />
    <Header isVisible={true}>
      <Nav />
    </Header>
    <div style={{ paddingTop: HEADER_HEIGHT }}>
      <Container topSpacing="1.5rem">
        <H1>Oopsies</H1>
        <p>
          You've found yourself on a page that doesn't exist.
          <NotFoundLink as={Link} to="/">
            {' '}
            Click Here
          </NotFoundLink>
        </p>
      </Container>
    </div>
  </Layout>
);

export default NotFoundPage;
