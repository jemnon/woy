import React, { FC, useState, useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import Layout from '../organisms/Layout';
import Media from '../molecules/Media';
import SEO from '../molecules/SEO';
import { H4 } from '../atoms/Headings';
import { ColorMode as ColorModeType } from '../types/theme';
import { Post as PostType } from '../types/post';

interface LatestPost {
  node: PostType;
}

interface RecentPosts {
  node: PostType;
}

interface HomeProps {
  pageContext?: {
    page?: {
      latestPost?: LatestPost[];
      recentPosts?: RecentPosts[];
    };
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

const Home: FC<HomeProps> = ({ pageContext }) => {
  const [headerColorTheme, setHeaderColorTheme] = useState<ColorModeType>(
    'dark',
  );
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [{ node: latestPostNode }] = pageContext?.page?.latestPost || [];
  const { recentPosts } = pageContext?.page || {};
  const handleViewPost = (slug?: string): void => {
    navigate(`/post/${slug}`);
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
      <SEO
        description={metaDesc}
        image="https://images.ctfassets.net/lz7g6u6kccw7/5ZTQ6JUabdhzkYxGsOWwAN/38506c10912bb5fb03443efb790da33f/creamy_garlic_pork_chops.JPG?w=800&q=60"
        title="Whisper of Yum | Recipes, Cooking and Los Angeles"
        type="website"
      />
      {latestPostNode?.images && (
        <>
          <Header colorTheme={headerColorTheme} pathname="/" />
          <Hero
            title={latestPostNode?.title}
            onViewPost={(): void => handleViewPost(latestPostNode?.slug)}
            image={
              <Img
                alt={latestPostNode?.title}
                fluid={latestPostNode?.images[0].fluid}
              />
            }
            ref={heroRef}
          />
        </>
      )}
      <Container>
        <Grid columns={3}>
          <GridCell width={2}>
            <H4>Latest</H4>
            {recentPosts && (
              <ul>
                {recentPosts.map((post, id) => (
                  <li key={id}>
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
                  </li>
                ))}
              </ul>
            )}
          </GridCell>
          <GridCell width={1}>right content</GridCell>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
