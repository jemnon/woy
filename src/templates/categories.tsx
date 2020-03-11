import React, { FC } from 'react';
import styled from 'styled-components';
import { Categories as CategoriesType } from '../types/categories';
import ContainerStyled, {
  ContainerContent,
  ContainerSideBar,
  HR,
} from '../components/container-styled';
import Categories from '../components/Categories';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import Link from '../components/Link';
import PostDetail from '../components/PostDetail';
import SEO from '../components/SEO';

interface CategoriesPageProps {
  pageContext: {
    page: CategoriesType;
  };
}

const CategoriesPageListItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }): string => theme.colors.nearBlack};
  }
`;

const CategoriesPage: FC<CategoriesPageProps> = ({ pageContext }) => {
  const { page: pageData } = pageContext || {};
  const { posts } = pageData || {};
  return (
    <Layout>
      <SEO
        description="Whisper of Yum Categories page"
        title="Categories"
        meta={[
          {
            name: '',
            content: '',
          },
        ]}
      />
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <ContainerStyled>
          <ContainerContent>
            {posts && (
              <ul>
                {posts.map((post, idx) => {
                  const postsLength = posts.length;
                  return (
                    <CategoriesPageListItem
                      key={`categories-${idx}-${post.id}`}
                    >
                      <Link to={`/post/${post.slug}`}>
                        <PostDetail
                          categories={post.categories}
                          publishDate={post.publishDate}
                          images={post.images}
                          title={post.title}
                          body={post.body}
                        />
                      </Link>
                      {posts.length - 1 === idx ? null : <HR />}
                    </CategoriesPageListItem>
                  );
                })}
              </ul>
            )}
          </ContainerContent>
          <ContainerSideBar>
            {/* categories && <Categories categories={categories} /> */}
          </ContainerSideBar>
        </ContainerStyled>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
