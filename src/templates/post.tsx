import React, { FC } from 'react';
import ContainerStyled, {
  ContainerContent,
  ContainerSideBar,
  HR,
} from '../components/container-styled';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Post: FC = () => {
  return (
    <Layout>
      <SEO
        description="Whipser of Yum Post page"
        title="Whipser of Yum Post page"
        meta={[
          {
            name: 'Whipser of Yum',
            content: 'home',
          },
        ]}
      />

      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <ContainerStyled>
          <ContainerContent>Post</ContainerContent>
          <ContainerSideBar>Siebar</ContainerSideBar>
        </ContainerStyled>
      </div>
    </Layout>
  );
};

export default Post;
