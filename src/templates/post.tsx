import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Categories as CategoriesType } from '../types/categories';
import { Post as PostType } from '../types/post';
import ContainerStyled, {
  ContainerContent,
  ContainerSideBar,
} from '../components/container-styled';
import Categories from '../components/Categories';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import PostDetail from '../components/PostDetail';
import SEO from '../components/SEO';

interface PostProps {
  data?: {
    allContentfulCategories?: {
      nodes: CategoriesType[];
    };
  };
  pageContext: {
    page: PostType;
  };
}

const Post: FC<PostProps> = ({ data, pageContext }) => {
  const { nodes: categories } = data?.allContentfulCategories || {};
  const { page: post } = pageContext || {};
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
          <ContainerContent>
            {post && (
              <PostDetail
                categories={post.categories}
                publishDate={post.publishDate}
                images={post.images}
                title={post.title}
                body={post.body}
              />
            )}
          </ContainerContent>
          <ContainerSideBar>
            {categories && <Categories categories={categories} />}
          </ContainerSideBar>
        </ContainerStyled>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulCategories {
      nodes {
        name
        posts {
          slug
          id
        }
      }
    }
  }
`;

export default Post;
