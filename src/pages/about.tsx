import React, { FC } from 'react';
import ContainerStyled from '../components/container-styled';
import { HEADER_HEIGHT } from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About: FC<{}> = () => {
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
        <ContainerStyled>About</ContainerStyled>
      </div>
    </Layout>
  );
};

export default About;
