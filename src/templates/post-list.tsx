import React, { FC } from 'react';
import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { up } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Layout, { PageHeader } from '../organisms/Layout';
import SideContent from '../organisms/SideContent';
import Stack, { StackItem } from '../organisms/Stack';
import BackToTop from '../molecules/BackToTop';
import BreadCrumbs from '../molecules/BreadCrumbs';
import Media from '../molecules/Media';
import Pagination from '../molecules/Pagingation';
import SEO from '../molecules/SEO';
import { H4 } from '../atoms/Headings';
import Link from '../atoms/Link';
import FeaturedOnType from '../types/featured-on';
import InstagramType from '../types/instagram';
import { Post as PostType } from '../types/post';
import ProfileAboutType from '../types/profile-about';

interface PostNode {
  node: PostType;
}

interface Instagram {
  node: InstagramType;
}

interface PostListProps {
  data?: {
    allContentfulPosts?: {
      edges?: PostNode[];
    };
  };
  location: {
    pathname: string;
  };
  pageContext?: {
    about?: ProfileAboutType;
    featuredOn?: FeaturedOnType;
    instagram?: Instagram[];
    currentPage: number;
    limit: number;
    totalPages: number;
  };
}

const PostList: FC<PostListProps> = ({ data, location, pageContext }) => {
  const isMediumUp = useBreakpoint(up('md'));
  const { edges: posts } = data?.allContentfulPosts || {};
  const { about } = pageContext || {};
  const { featuredOn } = pageContext || {};
  const { instagram } = pageContext || {};
  const handlePaginationClick = (page: number): void => {
    navigate(`/posts/${page}`);
  };
  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <Header pathname="/recipes" />
      <Container>
        <PageHeader>
          <BreadCrumbs title="recipes" />
        </PageHeader>
        <Grid columns={isMediumUp ? 12 : 1}>
          <GridCell width={isMediumUp ? 8 : 1}>
            {posts && (
              <Stack>
                <H4>Recipes</H4>
                {posts.map(post => (
                  <StackItem key={post.node.id}>
                    <Link to={`/post/${post.node.slug}`}>
                      {
                        <Media
                          description={
                            <>
                              {post.node.bodyPreview && (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      post.node.bodyPreview.childMarkdownRemark
                                        ?.html || '',
                                  }}
                                />
                              )}
                            </>
                          }
                          publishDate={post.node.publishDate || ''}
                          title={post.node.title}
                          image={
                            post.node.images[0].fluid && (
                              <Img
                                alt={post.node.title}
                                fluid={post.node.images[0].fluid}
                              />
                            )
                          }
                        />
                      }
                    </Link>
                  </StackItem>
                ))}
                {!isMediumUp && (
                  <>
                    {pageContext?.currentPage && pageContext.totalPages && (
                      <StackItem>
                        <Pagination
                          currentPage={pageContext?.currentPage}
                          onClick={handlePaginationClick}
                          totalPages={pageContext?.totalPages}
                        />
                      </StackItem>
                    )}
                  </>
                )}
              </Stack>
            )}
          </GridCell>
          <GridCell width={isMediumUp ? 4 : 1}>
            <SideContent
              about={about}
              featuredOn={featuredOn}
              instagram={instagram}
            />
          </GridCell>
        </Grid>
        {isMediumUp && (
          <>
            {pageContext?.currentPage && pageContext.totalPages && (
              <Pagination
                currentPage={pageContext?.currentPage}
                onClick={handlePaginationClick}
                totalPages={pageContext?.totalPages}
              />
            )}
          </>
        )}
        <BackToTop />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query postsPageQuery($skip: Int!, $limit: Int!) {
    allContentfulPosts(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: publishDate }
    ) {
      edges {
        node {
          id
          slug
          publishDate
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
  }
`;

export default PostList;
