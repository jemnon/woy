import React, { FC, useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { HeroType } from '../types/hero';
import { Post as PostType } from '../types/post';
import Container, { Content } from '../components/container-styled';
import Header from '../components/Header';
import Nav from '../components/Nav';
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
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-bottom: 2rem;
    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  }
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    color: ${({ theme }): string => theme.colors.nearBlack};
  }
`;

const metaDesc =
  `Just like you (or not), I love food. So much so, ` +
  `my partner and I decided to create this repository of my go-to, ` +
  `flavor-bomb dishes, with simple-ish prep. I get down making all sorts ` +
  `of eats, especially Filipino dishes from my childhood. ` +
  `I keep it simple and straight to the point; brief-ish description, ingredients, and steps.` +
  `I figure, if it looks good and you feel so inclined to making it, ` +
  `I'll spare you the endless scrolling through the details of why I ` +
  `chose a specific ingredient over another and get straight to what ` +
  `you want. Enjoy the content.`;

const IndexPage: FC<HomePageProps> = ({ data }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
  const { edges: posts } = data?.allContentfulPosts || {};
  const { edges: hero } = data?.allContentfulHeroes || {};
  const [{ node: heroNode }] = hero || [];
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('#hero')?.clientHeight || 0;
      const windowY = window.pageYOffset;
      const waypoint = heroHeight / 2;
      if (waypoint >= windowY) {
        setIsHeaderVisible(false);
      }
      if (waypoint <= windowY) {
        setIsHeaderVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHeaderVisible, setIsHeaderVisible]);
  return (
    <Layout>
      <SEO
        description={metaDesc}
        image="https://res.cloudinary.com/dd8c1nipl/image/upload/c_scale,w_880/v1586932061/woy/pork-chop.jpg"
        title="Whisper of Yum | Recipes, Cooking and Los Angeles"
      />
      <Header isVisible={isHeaderVisible}>
        <Nav isHeaderVisible={isHeaderVisible} />
      </Header>
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
                      bodyPreview={post.node.bodyPreview}
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
            fixed(width: 400) {
              src
            }
            fluid {
              aspectRatio
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
          bodyPreview {
            bodyPreview
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
