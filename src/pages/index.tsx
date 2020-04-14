import React, { FC } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { HeroType } from '../types/hero';
import { Post as PostType } from '../types/post';
import Container, { Content } from '../components/container-styled';
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
    allContentfulPosts?: {
      edges?: PostNode[];
    };
    allContentfulHeroes?: {
      edges?: HeroNode[];
    };
  };
}

const HomePageListItem = styled.li`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    margin-bottom: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  margin-bottom: 1rem;
  a {
    text-decoration: none;
    color: ${({ theme }): string => theme.colors.nearBlack};
  }
`;

const IndexPage: FC<HomePageProps> = ({ data }) => {
  const { edges: posts } = data?.allContentfulPosts || {};
  const { edges: hero } = data?.allContentfulHeroes || {};
  const [{ node: heroNode }] = hero || [];
  return (
    <Layout>
      <SEO
        description="Whipser of Yum Home page"
        title="Whipser of Yum"
        meta={[
          {
            name: 'Whipser of Yum',
            content: 'home',
          },
        ]}
      />
      <Hero images={heroNode.images} />
      <Container>
        {posts && (
          <Content>
            {posts.map((post, idx) => {
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
                </HomePageListItem>
              );
            })}
          </Content>
        )}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
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
            bodyShort
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
