import React, { FC } from 'react';
import ContainerStyled from '../components/container-styled';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

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
    <div style={{ paddingTop: HEADER_HEIGHT }}>
      <ContainerStyled>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </ContainerStyled>
    </div>
  </Layout>
);

export default NotFoundPage;
