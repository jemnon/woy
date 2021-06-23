import React, { FC, useRef, useState } from 'react';
import Img from 'gatsby-image';
import { navigate } from 'gatsby';
import { v4 as uuid } from 'uuid';
import Carousel from '../organisms/Carousel';
import Comments from '../organisms/Comments';
import CommentsForm from '../organisms/Comments/CommentsForm';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Layout, { PageHeader } from '../organisms/Layout';
import Scroller from '../organisms/Scroller';
import SideContent from '../organisms/SideContent';
import Stack, { StackItem, VStack } from '../organisms/Stack';
import BackToTop from '../molecules/BackToTop';
import BreadCrumbs from '../molecules/BreadCrumbs';
import Card from '../molecules/Card';
import JumpToRecipeButton from '../molecules/JumpToRecipeButton';
import MarkdownList from '../molecules/MarkdownList';
import PinButton from '../molecules/PinButton';
import PrintButton from '../molecules/PrintButton';
import PosterIterator from '../molecules/PostIterator';
import Rating from '../molecules/Rating';
import SEO from '../molecules/SEO';
import Share from '../molecules/Share';
import Social from '../molecules/Social';
import Author from '../atoms/Author';
import Box from '../atoms/Box';
import Divider from '../atoms/Divider';
import { H1, H4 } from '../atoms/Headings';
import ImgWrapper from '../atoms/ImgWrapper';
import Link from '../atoms/Link';
import Paragraph from '../atoms/Paragraph';
import PostDate from '../atoms/PostDate';
import Text from '../atoms/Text';
import useGetComments from '../hooks/useGetComments';
import { useBreakpointContext } from '../context/BreakpointContextProvider';
import { postComment } from '../lib/Comments';
import { generateFromAst } from '../utils/utils';
import InstagramType from '../types/instagram';
import { Post as PostType } from '../types/post';
import ProfileAboutType from '../types/profile-about';
import CommentsType from '../types/comments';

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
  const commentsFormRef = useRef<HTMLFormElement | null>(null);
  const [commentId, setCommentId] = useState<string | undefined>(undefined);
  const recipeRef = useRef<HTMLDivElement | null>(null);
  const { name: breakpoint } = useBreakpointContext();
  const { page: post, about, instagram } = pageContext || {};
  const { comments, ratingsTotal, ratingsAvg } = useGetComments(
    commentId,
    post.contentful_id,
  );
  const totalImages = post.images.length;
  const [{ fixed }] = post.images || [];
  const [isSubmittingComment, setIsSubmittingComment] = useState<boolean>(
    false,
  );
  const [replyId, setReplyId] = useState<string | undefined>(undefined);
  const [replyName, setReplyName] = useState<string | undefined>(undefined);
  /**
   * Hanles comment form submission
   * @param comment
   */
  const handleCommentFormSubmit = async (
    comment: CommentsType,
  ): Promise<void> => {
    localStorage.setItem('timestamp', `${comment?.timestamp}`);
    const id = uuid();
    const postId = post.contentful_id;
    const body = {
      id,
      postId,
      replyId,
      ...comment,
    };
    setIsSubmittingComment(true);
    try {
      await postComment(body);
      setIsSubmittingComment(false);
      setCommentId(id);
      if (commentsFormRef?.current) {
        commentsFormRef.current.reset();
      }
      if (replyId) {
        setReplyId(undefined);
        setReplyName(undefined);
      }
    } catch (error) {
      setIsSubmittingComment(false);
    }
  };
  /**
   * Handles cancel reply state
   */
  const handleCancelReply = (): void => {
    setReplyId(undefined);
    setReplyName(undefined);
  };
  /**
   * Handles replay state
   * @param id
   * @param name
   */
  const handleReply = (id?: string, name?: string): void => {
    setReplyId(id);
    setReplyName(name);
    if (commentsFormRef && commentsFormRef.current) {
      commentsFormRef.current.focus();
      const top = commentsFormRef.current.offsetTop - 160;
      window.scrollTo({ top, left: 0, behavior: 'smooth' });
    }
  };
  /**
   * Handles next or prev post click
   * @param slug
   */
  const handleIteratorClick = (slug: string): void => {
    navigate(`/post/${slug}`);
  };
  /**
   * Handles jumpes to recipe card
   */
  const handleJumpToRecipe = (): void => {
    if (recipeRef.current) {
      const { offsetTop } = recipeRef.current;
      window.scrollTo({ top: offsetTop - 64, left: 0, behavior: 'smooth' });
    }
  };
  /**
   * Handles link to print recipe
   */
  const handlePrintClick = (): void => {
    navigate(`/recipe-print/${post.slug}`);
  };
  const schemaJson = {
    '@context': 'http://schema.org',
    '@type': 'Recipe',
    author: 'Jeri Mobley-Arias',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: `${ratingsAvg}`,
      reviewCount: `${ratingsTotal}`,
    },
    description: post.bodyPreview?.bodyPreview,
    datePublished: post.publishDate,
    image: `https:${fixed?.src}`,
    name: capitalize(post.title),
    recipeIngredient: generateFromAst(
      post.ingredients?.childMarkdownRemark?.htmlAst,
    ),
    recipeInstructions: generateFromAst(
      post.instructions?.childMarkdownRemark?.htmlAst,
      'instructions',
      'ol',
    ),
    recipeYield: post.servings,
    totalTime: post.totalTime,
  };
  return (
    <Layout>
      <SEO
        ampHtml={post?.enableAmp}
        description={`${post.bodyPreview?.bodyPreview}`}
        title={`${capitalize(post.title)} | Whisper of Yum`}
        type="article"
        image={`https:${fixed?.src}`}
        pathname={location.pathname}
        script={JSON.stringify(schemaJson)}
        slug={post.slug}
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
          <StackItem bottomSpacing="xlg4">
            <Grid
              columns={breakpoint === 'desktop' ? 12 : 1}
              rowGap={breakpoint === 'desktop' ? 'md4' : 'sm4'}
            >
              <GridCell width={breakpoint === 'desktop' ? 8 : 1}>
                {post.publishDate && (
                  <PostDate publishDate={post.publishDate} />
                )}
                <H1 bottomSpacing="0.5rem">{post.title}</H1>
                <Author />
                {post.bodyPreview && (
                  <Paragraph>{post.bodyPreview.bodyPreview}</Paragraph>
                )}
                <Stack
                  flow={breakpoint === 'desktop' ? 'row' : 'column'}
                  bottomSpacing="sm4"
                >
                  <StackItem
                    flow={breakpoint === 'desktop' ? 'row' : 'column'}
                    bottomSpacing="sm2"
                    rightSpacing="sm2"
                  >
                    <JumpToRecipeButton
                      onClick={handleJumpToRecipe}
                      width={breakpoint === 'desktop' ? 'auto' : '100%'}
                    />
                  </StackItem>
                  <StackItem flow={breakpoint === 'desktop' ? 'row' : 'column'}>
                    <PinButton
                      description={post.bodyPreview?.bodyPreview}
                      media={`https:${fixed?.src}`}
                      url={location.href}
                      width={breakpoint === 'desktop' ? 'auto' : '100%'}
                    />
                  </StackItem>
                </Stack>
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
                  <SideContent about={about} instagram={instagram} />
                </GridCell>
              )}
            </Grid>
          </StackItem>
          <StackItem bottomSpacing="xlg4">
            <Box padding="sm4" borderTop="4px solid" borderColor="orange">
              <Text
                bottomSpacing="sm4"
                fontSize={breakpoint === 'desktop' ? 'f2' : 'f1'}
                fontWeight="bold"
                textAlign="center"
              >
                Have we connected on social media, yet? <br /> If not, be sure
                to follow me on:
              </Text>
              <Social />
            </Box>
          </StackItem>
          {post.ingredients && (
            <StackItem bottomSpacing="xlg4">
              <Box padding="sm4" ref={recipeRef}>
                <Grid columns={breakpoint === 'desktop' ? 12 : 1} rowGap="sm4">
                  <GridCell width={breakpoint === 'desktop' ? 8 : 1}>
                    <H4>{post.title}</H4>
                    <Author />
                    {post.bodyPreview && (
                      <Paragraph>{post.bodyPreview.bodyPreview}</Paragraph>
                    )}
                    <Stack bottomSpacing="sm4">
                      <StackItem bottomSpacing="sp-0">
                        <Text display="inline" fontWeight="bold">
                          Total Time:{' '}
                        </Text>
                        {post.totalTime}
                      </StackItem>

                      <StackItem bottomSpacing="sp-0">
                        <Text display="inline" fontWeight="bold">
                          Servings:{' '}
                        </Text>
                        {post.servings}
                      </StackItem>
                    </Stack>

                    <Stack
                      flow={breakpoint === 'desktop' ? 'row' : 'column'}
                      bottomSpacing={breakpoint === 'desktop' ? 'sm4' : 'sp-0'}
                    >
                      <StackItem
                        flow={breakpoint === 'desktop' ? 'row' : 'column'}
                        bottomSpacing="sm2"
                        rightSpacing="sm2"
                      >
                        <PrintButton
                          onClick={handlePrintClick}
                          width={breakpoint === 'desktop' ? 'auto' : '100%'}
                        />
                      </StackItem>
                      <StackItem
                        flow={breakpoint === 'desktop' ? 'row' : 'column'}
                      >
                        <PinButton
                          description={post.bodyPreview?.bodyPreview}
                          media={`https:${fixed?.src}`}
                          url={location.href}
                          width={breakpoint === 'desktop' ? 'auto' : '100%'}
                        />
                      </StackItem>
                    </Stack>
                  </GridCell>
                  <GridCell width={breakpoint === 'desktop' ? 4 : 1}>
                    <ImgWrapper ratio={1 / 1}>
                      {post.images[0].fluid && (
                        <Img alt={post.title} fluid={post.images[0].fluid} />
                      )}
                    </ImgWrapper>
                    {ratingsAvg && (
                      <>
                        <Rating rating={ratingsAvg ?? 0} size="small" />
                        <div>
                          {ratingsAvg} from {ratingsTotal} votes
                        </div>
                      </>
                    )}
                  </GridCell>
                </Grid>
                <Divider />
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
          {post.enableComments && (
            <StackItem bottomSpacing="xlg4">
              <H4>Comments</H4>
              <Box padding="sm4">
                <CommentsForm
                  commentId={commentId}
                  isLoading={isSubmittingComment}
                  onCancelReply={handleCancelReply}
                  onSubmit={handleCommentFormSubmit}
                  replyName={replyName}
                  ref={commentsFormRef}
                />
                <Comments comments={comments} onReply={handleReply} />
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
              <SideContent about={about} instagram={instagram} />
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
