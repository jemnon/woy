import React, { FC } from 'react';
import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Layout, { PageHeader } from '../organisms/Layout';
import Newsletter from '../organisms/Newsletter';
import Scroller from '../organisms/Scroller';
import Stack, { StackItem } from '../organisms/Stack';
import BackToTop from '../molecules/BackToTop';
import BreadCrumbs from '../molecules/BreadCrumbs';
import Media from '../molecules/Media';
import ProfileCard from '../molecules/ProfileCard';
import Pagination from '../molecules/Pagingation';
import SEO from '../molecules/SEO';
import Box from '../atoms/Box';
import { H4 } from '../atoms/Headings';
import Link from '../atoms/Link';
import ImgWrapper from '../atoms/ImgWrapper';
import { InstaDesktop, InstaMobile } from '../atoms/InstagramContainer';
import { useBreakpointContext } from '../context/BreakpointContextProvider';
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

const PostList: FC<PostListProps> = ({ data, location, pageContext }) => {
  const { name: breakpoint } = useBreakpointContext();
  const { edges: posts } = data?.allContentfulPosts || {};
  const { about } = pageContext || {};
  const { featuredOn } = pageContext || {};
  const { instagram } = pageContext || {};
  const handlePaginationClick = (page: number): void => {
    navigate(`/posts/${page}`);
  };
  return (
    <Layout>
      <SEO
        description={metaDesc}
        image="https://res.cloudinary.com/dd8c1nipl/image/upload/c_scale,w_880/v1586932061/woy/pork-chop.jpg"
        pathname={location.pathname}
        title="Whisper of Yum | Recipes, Cooking and Los Angeles"
        type="website"
      />
      <Header pathname="/recipes" />
      <Container>
        <PageHeader>
          <BreadCrumbs title="recipes" />
        </PageHeader>
        <Grid columns={breakpoint === 'desktop' ? 12 : 1}>
          <GridCell width={breakpoint === 'desktop' ? 8 : 1}>
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
                {breakpoint !== 'desktop' && (
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
          <GridCell width={breakpoint === 'desktop' ? 4 : 1}>
            {about && (
              <Stack>
                {
                  <ProfileCard
                    descriptionHtml={
                      about?.description.childMarkdownRemark.html
                    }
                    image={about?.avatar.fixed.src}
                    name={about?.name}
                    onClick={(): void => {
                      navigate('/about');
                    }}
                  />
                }
              </Stack>
            )}
            {featuredOn && (
              <Stack>
                <H4>Featured On</H4>
                <Grid columns={3} rowGap="sm4" gap="sm4">
                  {featuredOn.logos.map((logo, idx) => (
                    <GridCell key={idx} width={1}>
                      <Link to={featuredOn.links[idx]} target="_blank">
                        <Box
                          display="flex"
                          bgColor="nearWhite"
                          width="100%"
                          padding="sm4"
                          height="100%"
                        >
                          {logo.fluid && (
                            <Img
                              alt="feature on logos"
                              fluid={logo.fluid}
                              style={{ width: '100%' }}
                            />
                          )}
                        </Box>
                      </Link>
                    </GridCell>
                  ))}
                </Grid>
              </Stack>
            )}

            <Stack>
              <H4>Newsletter</H4>
              <Newsletter />
            </Stack>
            {instagram && (
              <Stack>
                <H4>Instagram</H4>
                <InstaDesktop>
                  <Grid columns={2} gap="sm4" rowGap="sm4">
                    {instagram.map(item => (
                      <GridCell key={item.node.id} width={1}>
                        <Link to={item.node.permalink} target="_blank">
                          <ImgWrapper ratio={1 / 1}>
                            <Img
                              alt="whisperofyum instagram"
                              fixed={item.node.localImage.childImageSharp.fixed}
                            />
                          </ImgWrapper>
                        </Link>
                      </GridCell>
                    ))}
                  </Grid>
                </InstaDesktop>
                <InstaMobile>
                  <Scroller>
                    {instagram.map(item => (
                      <Link
                        to={item.node.permalink}
                        key={item.node.id}
                        target="_blank"
                      >
                        <ImgWrapper ratio={1 / 1}>
                          <Img
                            alt="whisperofyum instagram"
                            fixed={item.node.localImage.childImageSharp.fixed}
                          />
                        </ImgWrapper>
                      </Link>
                    ))}
                  </Scroller>
                </InstaMobile>
              </Stack>
            )}
          </GridCell>
        </Grid>
        {breakpoint === 'desktop' && (
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
