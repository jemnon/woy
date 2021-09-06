import React, { FC, useState, useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import { up } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import Layout from '../organisms/Layout';
import Scroller from '../organisms/Scroller';
import SideContent from '../organisms/SideContent';
import Stack, { StackItem } from '../organisms/Stack';
import BackToTop from '../molecules/BackToTop';
import CalloutLink from '../molecules/CalloutLink';
import Media from '../molecules/Media';
import SEO from '../molecules/SEO';
import VideoThumb from '../molecules/VideoThumb';
import { H4 } from '../atoms/Headings';
import Link from '../atoms/Link';
import useWindowResize from '../hooks/useWindowResize';
import FeaturedOnType from '../types/featured-on';
import { ColorMode as ColorModeType } from '../types/theme';
import InstagramType from '../types/instagram';
import { Post as PostType } from '../types/post';
import ProfileAboutType from '../types/profile-about';
import {
  VideoReel as VideoReelType,
  VideoReelThumb as VideoReelThumbType,
} from '../types/video-reel';

interface LatestPost {
  node: PostType;
}

interface RecentPosts {
  node: PostType;
}

interface Favorites {
  node: {
    posts: PostType[];
  };
}

interface Instagram {
  node: InstagramType;
}

interface HomeProps {
  pageContext?: {
    page?: {
      about?: ProfileAboutType;
      featuredOn?: FeaturedOnType;
      reels?: {
        videos: VideoReelType[];
        videoThumbs: VideoReelThumbType[];
      };
      favorites?: Favorites[];
      instagram?: Instagram[];
      latestPost?: LatestPost[];
      recentPosts?: RecentPosts[];
    };
  };
}

const Home: FC<HomeProps> = ({ pageContext }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const isMediumUp = useBreakpoint(up('md'));
  const { height } = useWindowResize();
  const [headerColorTheme, setHeaderColorTheme] = useState<ColorModeType>(
    'dark',
  );
  const { about } = pageContext?.page || {};
  const [{ node: latestPostNode }] = pageContext?.page?.latestPost || [];
  const [{ node: favoritesNode }] = pageContext?.page?.favorites || [];
  const { instagram } = pageContext?.page || {};
  const { recentPosts } = pageContext?.page || {};
  const { reels } = pageContext?.page || {};
  const { featuredOn } = pageContext?.page || {};
  const handleDownScroll = (): void => {
    if (window && typeof height === 'number')
      window.scrollTo({
        top: height - 64,
        left: 0,
        behavior: 'smooth',
      });
  };
  const handleViewPost = (slug?: string): void => {
    navigate(`/post/${slug}`);
  };
  const handleViewAllClick = (): void => {
    navigate(`/posts/1`);
  };
  useEffect(() => {
    const heroHeight = heroRef.current?.clientHeight || 0;
    const handleScroll = (): void => {
      const windowY = window.pageYOffset;
      const waypoint = heroHeight / 3;
      if (waypoint >= windowY) {
        setHeaderColorTheme('dark');
      }
      if (waypoint <= windowY) {
        setHeaderColorTheme('light');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerColorTheme, setHeaderColorTheme]);
  return (
    <Layout>
      <SEO />
      {latestPostNode?.images && (
        <>
          <Header colorTheme={headerColorTheme} pathname="/" />
          <Hero
            title={latestPostNode?.title}
            onDownScroll={handleDownScroll}
            onViewPost={(): void => handleViewPost(latestPostNode?.slug)}
            image={
              latestPostNode?.images[0].fluid && (
                <Img
                  alt={latestPostNode?.title}
                  fluid={latestPostNode?.images[0].fluid}
                />
              )
            }
            ref={heroRef}
          />
        </>
      )}
      <Container ref={containerRef} hasTopMargin={false}>
        <Grid columns={isMediumUp ? 12 : 1}>
          <GridCell width={isMediumUp ? 8 : 1}>
            {recentPosts && (
              <Stack>
                <H4>Latest</H4>
                {recentPosts.map(post => (
                  <StackItem key={post.node.slug}>
                    <Link to={`/post/${post.node.slug}`}>
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
                    </Link>
                  </StackItem>
                ))}
                <CalloutLink onClick={handleViewAllClick}>View All</CalloutLink>
              </Stack>
            )}
            {reels && (
              <Stack>
                <H4>Videos</H4>
                <Scroller columnWidth={isMediumUp ? '33.33%' : '85%'}>
                  {reels.videoThumbs.map((thumb, idx) => (
                    <VideoThumb
                      key={`video-thumb-${idx}`}
                      image={<Img alt={thumb.fluid.src} fluid={thumb.fluid} />}
                      videoUrl={reels.videos[idx].secure_url}
                    />
                  ))}
                </Scroller>
              </Stack>
            )}

            {favoritesNode && (
              <Stack>
                <H4>Popular Recipes</H4>
                {favoritesNode.posts.map(post => (
                  <StackItem key={post.slug}>
                    <Link to={`/post/${post.slug}`}>
                      <Media
                        description={
                          <>
                            {post.bodyPreview && (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html:
                                    post.bodyPreview.childMarkdownRemark
                                      ?.html || '',
                                }}
                              />
                            )}
                          </>
                        }
                        publishDate={post.publishDate || ''}
                        title={post.title}
                        image={
                          post.images[0].fluid && (
                            <Img
                              alt={post.title}
                              fluid={post.images[0].fluid}
                            />
                          )
                        }
                      />
                    </Link>
                  </StackItem>
                ))}
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
        <BackToTop top={(height as number) - 64} />
      </Container>
    </Layout>
  );
};

export default Home;
