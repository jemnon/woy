import React, { FC, useRef } from 'react';
import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import Newsletter from '../organisms/Newsletter';
import Scroller from '../organisms/Scroller';
import Stack, { StackItem } from '../organisms/Stack';
import BackToTop from '../molecules/BackToTop';
import Media from '../molecules/Media';
import ProfileCard from '../molecules/ProfileCard';
import Pagination from '../molecules/Pagingation';
import SEO from '../molecules/SEO';
import { H4 } from '../atoms/Headings';
import Link from '../atoms/Link';
import ImgWrapper from '../atoms/ImgWrapper';
import { InstaDesktop, InstaMobile } from '../atoms/InstagramContainer';
import { useBreakpointContext } from '../context/BreakpointContextProvider';
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { name: breakpoint } = useBreakpointContext();
  const { edges: posts } = data?.allContentfulPosts || {};
  const { about } = pageContext || {};
  const { instagram } = pageContext || {};
  const handleScroll = (): void => {
    if (containerRef.current)
      containerRef?.current.scrollIntoView({
        behavior: 'smooth',
      });
  };
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

      <Header />
      <Container ref={containerRef}>
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
                            <Img
                              alt={post.node.title}
                              fluid={post.node.images[0].fluid}
                            />
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
        <BackToTop onClick={handleScroll} />
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
