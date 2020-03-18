import React, { FC } from 'react';
import ContainerStyled from '../components/container-styled';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import Search from '../components/Search';
import SEO from '../components/SEO';

const SearchPage: FC<{}> = () => {
  return (
    <Layout>
      <SEO
        description="Whipser of Yum Search page"
        title="Whisper search page"
        meta={[
          {
            name: 'whipser of yum',
            content: 'search',
          },
        ]}
      />
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <ContainerStyled>
          <Search />
        </ContainerStyled>
      </div>
    </Layout>
  );
};

export default SearchPage;
