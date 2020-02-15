import React, { FC } from 'react';
import ContainerStyled from '../components/container-styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage: FC<{}> = () => (
  <Layout>
    <SEO
      description="Whipser of Yum 404 page"
      title="Whisper 404 page"
      meta={[
        {
          name: 'whipser of yum',
          content: '404',
        },
      ]}
    />
    <ContainerStyled>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ContainerStyled>
  </Layout>
);

export default NotFoundPage;
