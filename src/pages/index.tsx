import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HeroType } from '../types/hero';
import { Post } from '../types/post';
import ContainerStyled from '../components/container-styled';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface PostNode {
  node: Post;
}

interface HeroNode {
  node: HeroType;
}

interface HomeProps {
  data: {
    allContentfulPosts: {
      edges: PostNode[];
    };
    allContentfulHeroes: {
      edges: HeroNode[];
    };
  };
}

const IndexPage: FC<HomeProps> = ({
  data: { allContentfulPosts, allContentfulHeroes },
}) => {
  const { edges: posts } = allContentfulPosts || {};
  const { edges: hero } = allContentfulHeroes || {};
  const [{ node: heroNode }] = hero;
  console.log(heroNode.images);
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
        <ul>
          {posts.map(post => {
            const [{ fluid }] = post.node.images;
            return (
              <li key={post.node.id}>
                {post.node.title}
                <Img fluid={fluid} />
              </li>
            );
          })}
        </ul>
      </ContainerStyled>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulPosts(limit: 10) {
      edges {
        node {
          slug
          id
          publishDate
          categories {
            name
          }
          title
          images {
            fluid(maxWidth: 2000) {
              ...GatsbyContentfulFluid_withWebp
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
