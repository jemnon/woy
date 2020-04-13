import React, { FC } from 'react';
import Container from '../components/container-styled';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Contact: FC = () => {
  return (
    <Layout>
      <SEO
        description="Whipser of Yum About page"
        title="Whisper about page"
        meta={[
          {
            name: 'whipser of yum',
            content: 'about',
          },
        ]}
      />
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <Container>About</Container>
      </div>
    </Layout>
  );
};

export default Contact;
