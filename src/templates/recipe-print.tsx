import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../organisms/Container';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import { H1 } from '../atoms/Headings';
import SEO from '../molecules/SEO';

const RecipePrintPage: FC = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <Container>
        <H1>Print Page</H1>
      </Container>
    </Layout>
  );
};

export default RecipePrintPage;
