import React, { FC } from 'react';
import styled from 'styled-components';
import Layout from '../organisms/Layout';
import Link from '../atoms/Link';
import SEO from '../molecules/SEO';

const NotFoundLink = styled.a`
  color: ${({ theme }): string => theme.colors.orange};
`;

const NotFoundPage: FC = () => (
  <Layout>
    <SEO
      description="Recipes, Cooking, and Los Angeles"
      title="Whisper of Yum | Recipes, Cooking and Los Angeles"
      image="https://res.cloudinary.com/dd8c1nipl/image/upload/v1586838879/woy/social-logo.jpg"
    />
    Oopsies
    <p>
      You've found yourself on a page that doesn't exist.
      <NotFoundLink as={Link} to="/">
        Click Here
      </NotFoundLink>
    </p>
  </Layout>
);

export default NotFoundPage;
