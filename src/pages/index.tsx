import React, { FC } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { HeroType } from '../types/hero';
import { Post } from '../types/post';
import ContainerStyled, {
  ContainerContent,
  ContainerSideBar,
} from '../components/container-styled';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Link from '../components/Link';
import PostDetail from '../components/PostDetail';
import SEO from '../components/SEO';

interface PostNode {
  node: Post;
}

interface HeroNode {
  node: HeroType;
}

interface HomeProps {
  data?: {
    allContentfulPosts?: {
      edges?: PostNode[];
    };
    allContentfulHeroes?: {
      edges?: HeroNode[];
    };
  };
}

const HomeListItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }): string => theme.colors.nearBlack};
  }
`;

const HR = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }): string => theme.colors.orange};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const IndexPage: FC<HomeProps> = ({ data }) => {
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
              {posts.map(post => {
                return (
                  <HomeListItem key={post.node.id}>
                    <Link to={`/post/${post.node.slug}`}>
                      <PostDetail
                        categories={post.node.categories}
                        publishDate={post.node.publishDate}
                        images={post.node.images}
                        title={post.node.title}
                        bodyShort={post.node.bodyShort}
                      />
                    </Link>
                    <HR />
                  </HomeListItem>
                );
              })}
            </ul>
          )}
        </ContainerContent>
        <ContainerSideBar>Categories</ContainerSideBar>
      </ContainerStyled>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulPosts(limit: 10) {
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
          body {
            body
          }
          bodyShort {
            bodyShort
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
