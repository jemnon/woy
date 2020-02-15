import React, { FC } from 'react';
import ContainerStyled from '../components/container-styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact: FC<{}> = () => {
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
      <ContainerStyled>About</ContainerStyled>
    </Layout>
  );
};

export default Contact;
