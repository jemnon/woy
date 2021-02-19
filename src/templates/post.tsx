import React, { FC } from 'react';
import Img from 'gatsby-image';
import { navigate } from 'gatsby';
import Carousel from '../organisms/Carousel';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Layout, { PageHeader } from '../organisms/Layout';
import Newsletter from '../organisms/Newsletter';
import Scroller from '../organisms/Scroller';
import Stack, { StackItem } from '../organisms/Stack';
import Card from '../molecules/Card';
import MarkdownList from '../molecules/MarkdownList';
import PosterIterator from '../molecules/PostIterator';
import ProfileCard from '../molecules/ProfileCard';
import RecipeMeta from '../molecules/RecipeMeta';
import SEO from '../molecules/SEO';
import Share from '../molecules/Share';
import Social from '../molecules/Social';
import BackToTop from '../molecules/BackToTop';
import BreadCrumbs from '../molecules/BreadCrumbs';
import Box from '../atoms/Box';
import { H1, H4 } from '../atoms/Headings';
import ImgWrapper from '../atoms/ImgWrapper';
import Link from '../atoms/Link';
import { InstaDesktop, InstaMobile } from '../atoms/InstagramContainer';
import Paragraph from '../atoms/Paragraph';
import PostDate from '../atoms/PostDate';
import Text from '../atoms/Text';
import { useBreakpointContext } from '../context/BreakpointContextProvider';
import InstagramType from '../types/instagram';
import { Post as PostType } from '../types/post';
import ProfileAboutType from '../types/profile-about';
import { generateFromAst } from '../utils/utils';

interface Instagram {
  node: InstagramType;
}

interface PostPageProps {
  pageContext: {
    about?: ProfileAboutType;
    instagram?: Instagram[];
    page: PostType;
    next: PostType;
    prev: PostType;
  };
  location: {
    pathname: string;
    href: string;
  };
}

const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const PostPage: FC<PostPageProps> = ({ location, pageContext }) => {
  const { name: breakpoint } = useBreakpointContext();
  const { page: post, about, instagram } = pageContext || {};
  const totalImages = post.images.length;
  const [{ fixed }] = post.images || [];
  const handleIteratorClick = (slug: string): void => {
    navigate(`/post/${slug}`);
  };
  const schemaJson = {
    '@context': 'http://schema.org',
    '@type': 'Recipe',
    author: 'Jeri Mobley-Arias',
    description: post.bodyPreview?.bodyPreview,
    datePublished: post.publishDate,
    image: `https:${fixed?.src}`,
    name: capitalize(post.title),
    recipeIngredient: generateFromAst(post.body?.childMarkdownRemark?.htmlAst),
    recipeInstructions: generateFromAst(
      post.body?.childMarkdownRemark?.htmlAst,
      'instructions',
      'ol',
    ),
  };
  return (
    <Layout>
      <SEO
        description={`${post.bodyPreview?.bodyPreview}`}
        title={`${capitalize(post.title)} | Whisper of Yum`}
        type="article"
        image={`https:${fixed?.src}`}
        pathname={location.pathname}
        script={JSON.stringify(schemaJson)}
      />
      <Header />
      <Container>
        <PageHeader>
          <Grid columns={12} gap="sm4">
            <GridCell width={9}>
              <BreadCrumbs
                onClick={(): void => {
                  navigate('/');
                }}
                title={post.title}
              />
            </GridCell>
            <GridCell width={3} display="flex" justifyContent="flex-end">
              <Share
                description={post.bodyPreview?.bodyPreview}
                media={`https:${fixed?.src}`}
                title={post.title}
                url={location.href}
              />
            </GridCell>
          </Grid>
        </PageHeader>
        <Stack bottomSpacing="sp-0">
          <StackItem>
            <Grid
              columns={breakpoint === 'desktop' ? 12 : 1}
              rowGap={breakpoint === 'desktop' ? 'md4' : 'sm4'}
            >
              <GridCell width={breakpoint === 'desktop' ? 8 : 1}>
                {post.publishDate && (
                  <PostDate publishDate={post.publishDate} />
                )}
                <H1 bottomSpacing="1rem">{post.title}</H1>
                <Text
                  bottomSpacing="sm4"
                  fontSize={breakpoint === 'desktop' ? 'f2' : 'f1'}
                  fontWeight="bold"
                >
                  By Jeri Mobley-Arias
                </Text>
                {post.bodyPreview && (
                  <Paragraph>{post.bodyPreview.bodyPreview}</Paragraph>
                )}
                <Stack bottomSpacing="sp-0">
                  <StackItem bottomSpacing="sm4">
                    {totalImages > 1 ? (
                      <Carousel>
                        {post.images.map((img, idx) => (
                          <>
                            {img.fluid && (
                              <Img
                                alt={post.title}
                                key={`image-${idx}`}
                                style={{ width: '100%' }}
                                fluid={img.fluid}
                              />
                            )}
                          </>
                        ))}
                      </Carousel>
                    ) : (
                      <>
                        {post.images[0].fluid && (
                          <Img alt={post.title} fluid={post.images[0].fluid} />
                        )}
                      </>
                    )}
                  </StackItem>
                  {post.totalTime && post.servings && (
                    <StackItem bottomSpacing="sm4">
                      <RecipeMeta
                        cookTime={post.totalTime}
                        servings={post.servings}
                      />
                    </StackItem>
                  )}
                  {post?.bodyShort?.childMarkdownRemark && (
                    <StackItem bottomSpacing="sm4">
                      <MarkdownList
                        dangerouslySetInnerHTML={{
                          __html: post.bodyShort?.childMarkdownRemark?.html,
                        }}
                      />
                    </StackItem>
                  )}
                </Stack>
              </GridCell>
              {breakpoint === 'desktop' && (
                <GridCell width={4}>
                  {about && (
                    <Stack>
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
                                  <img
                                    alt="whisperofyum instagram"
                                    loading="lazy"
                                    src={
                                      item.node.localImage.childImageSharp.fixed
                                        .src
                                    }
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
                                <img
                                  alt="whisperofyum instagram"
                                  loading="lazy"
                                  src={
                                    item.node.localImage.childImageSharp.fixed
                                      .src
                                  }
                                />
                              </ImgWrapper>
                            </Link>
                          ))}
                        </Scroller>
                      </InstaMobile>
                    </Stack>
                  )}
                </GridCell>
              )}
            </Grid>
          </StackItem>
          <StackItem bottomSpacing="xlg4">
            <Box padding="sm4">
              <Text
                bottomSpacing="sm4"
                fontSize={breakpoint === 'desktop' ? 'f2' : 'f1'}
                fontWeight="bold"
                textAlign="center"
              >
                Have we connected on social media, yet? If not, be sure to
                follow me on:
              </Text>
              <Social />
            </Box>
          </StackItem>
          {post.ingredients && (
            <StackItem bottomSpacing="xlg4">
              <Box padding="sm4">
                <Grid columns={breakpoint === 'desktop' ? 12 : 1} rowGap="sm4">
                  <GridCell width={breakpoint === 'desktop' ? 6 : 1}>
                    {post.ingredients && (
                      <H4 bottomSpacing="sp-0">Ingredients</H4>
                    )}
                    {post.ingredients?.childMarkdownRemark && (
                      <MarkdownList
                        dangerouslySetInnerHTML={{
                          __html: post.ingredients?.childMarkdownRemark?.html,
                        }}
                      />
                    )}
                    {post.optionalIngredients && (
                      <>
                        {post.optionalIngredients?.childMarkdownRemark && (
                          <MarkdownList
                            dangerouslySetInnerHTML={{
                              __html:
                                post.optionalIngredients?.childMarkdownRemark
                                  ?.html,
                            }}
                          />
                        )}
                      </>
                    )}
                  </GridCell>
                  <GridCell width={breakpoint === 'desktop' ? 6 : 1}>
                    {post.instructions && (
                      <H4 bottomSpacing="sp-0">Instructions</H4>
                    )}
                    {post.instructions?.childMarkdownRemark && (
                      <MarkdownList
                        dangerouslySetInnerHTML={{
                          __html: post.instructions?.childMarkdownRemark?.html,
                        }}
                      />
                    )}
                  </GridCell>
                </Grid>
              </Box>
            </StackItem>
          )}

          <StackItem bottomSpacing="xlg4">
            <PosterIterator
              next={{
                image: post.next && post.next?.images[0].fluid && (
                  <Img
                    alt={post.next?.title}
                    fluid={post.next?.images[0].fluid}
                  />
                ),
                name: post.next?.title || '',
                slug: post.next?.slug || '',
              }}
              prev={{
                image: post.previous && post.previous?.images[0].fluid && (
                  <Img
                    alt={post.previous?.title}
                    fluid={post.previous?.images[0].fluid}
                  />
                ),
                name: post.previous?.title || '',
                slug: post.previous?.slug || '',
              }}
              onClick={handleIteratorClick}
            />
          </StackItem>
          {post.relatedRecipes && (
            <StackItem bottomSpacing="xlg4">
              <H4>Related Recipes</H4>
              {breakpoint === 'desktop' ? (
                <Grid columns={3} gap="sm4" rowGap="sm4">
                  {post.relatedRecipes.map(recipe => (
                    <GridCell key={recipe.slug} width={1}>
                      <Link to={`/post/${recipe.slug}`}>
                        <Card
                          image={
                            recipe.images[0].fluid && (
                              <Img
                                alt={recipe.title}
                                fluid={recipe.images[0].fluid}
                              />
                            )
                          }
                          publishDate={recipe.publishDate}
                          title={recipe.title}
                        />
                      </Link>
                    </GridCell>
                  ))}
                </Grid>
              ) : (
                <Scroller columnWidth="75%">
                  {post.relatedRecipes.map(recipe => (
                    <Link key={recipe.slug} to={`/post/${recipe.slug}`}>
                      <Card
                        image={
                          recipe.images[0].fluid && (
                            <Img
                              alt={recipe.title}
                              fluid={recipe.images[0].fluid}
                            />
                          )
                        }
                        publishDate={recipe.publishDate}
                        title={recipe.title}
                      />
                    </Link>
                  ))}
                </Scroller>
              )}
            </StackItem>
          )}
          {breakpoint !== 'desktop' && (
            <StackItem>
              {about && (
                <Stack>
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
                              <img
                                alt="whisperofyum instagram"
                                loading="lazy"
                                src={
                                  item.node.localImage.childImageSharp.fixed.src
                                }
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
                            <img
                              alt="whisperofyum instagram"
                              loading="lazy"
                              src={
                                item.node.localImage.childImageSharp.fixed.src
                              }
                            />
                          </ImgWrapper>
                        </Link>
                      ))}
                    </Scroller>
                  </InstaMobile>
                </Stack>
              )}
            </StackItem>
          )}
          <StackItem>
            <BackToTop />
          </StackItem>
        </Stack>
      </Container>
    </Layout>
  );
};

export default PostPage;
