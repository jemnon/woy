import React, { FC } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Categories as CategoriesType } from '../types/categories';
import { HeroType } from '../types/hero';
import { Post as PostType } from '../types/post';
import ContainerStyled, {
  ContainerContent,
  ContainerSideBar,
  HR,
} from '../components/container-styled';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Link from '../components/Link';
import PostDetail from '../components/PostDetail';
import SEO from '../components/SEO';

interface PostNode {
  node: PostType;
}

interface HeroNode {
  node: HeroType;
}

interface HomePageProps {
  data?: {
    allContentfulCategories?: {
      nodes: CategoriesType[];
    };
    allContentfulPosts?: {
      edges?: PostNode[];
    };
    allContentfulHeroes?: {
      edges?: HeroNode[];
    };
  };
}

const HomePageListItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }): string => theme.colors.nearBlack};
  }
`;

const IndexPage: FC<HomePageProps> = ({ data }) => {
  const { nodes: categories } = data?.allContentfulCategories || {};
  const { edges: posts } = data?.allContentfulPosts || {};
  const { edges: hero } = data?.allContentfulHeroes || {};
  const [{ node: heroNode }] = hero || [];
  return (
    <Layout>
      <SEO
        description="Whipser of Yum Home page"
        title="Whipser of Yum Home page"
        meta={[
          {
            name: 'Whipser of Yum',
            content: 'home',
          },
        ]}
      />
      <Hero images={heroNode.images} />
      <ContainerStyled>
        <ContainerContent>
          {posts && (
            <ul>
              {posts.map((post, idx) => {
                const postsLength = posts.length;
                return (
                  <HomePageListItem key={post.node.id}>
                    <Link to={`/post/${post.node.slug}`}>
                      <PostDetail
                        categories={post.node.categories}
                        publishDate={post.node.publishDate}
                        images={post.node.images}
                        title={post.node.title}
                        bodyShort={post.node.bodyShort}
                      />
                    </Link>
                    {posts.length - 1 === idx ? null : <HR />}
                  </HomePageListItem>
                );
              })}
            </ul>
          )}
        </ContainerContent>
        <ContainerSideBar>
          {categories && <Categories categories={categories} />}
        </ContainerSideBar>
      </ContainerStyled>
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
    allContentfulPosts(limit: 10, sort: { order: DESC, fields: publishDate }) {
      edges {
        node {
          id
          slug
          publishDate
          categories {
            name
            posts {
              slug
            }
          }
          title
          images {
            fluid {
              aspectRatio
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
          bodyShort {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulHeroes {
      edges {
        node {
          images {
            fluid {
              aspectRatio
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
