import React, { FC } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { navigate } from 'gatsby';
import Carousel from '../organisms/Carousel';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import SEO from '../molecules/SEO';
import Share from '../molecules/Share';
import BreadCrumbs from '../molecules/BreadCrumbs';
import { H1 } from '../atoms/Headings';
import ImgWrapper from '../atoms/ImgWrapper';
import PostDate from '../atoms/PostDate';
import useBreakpoint from '../hooks/useBreakpoint';
import { Post as PostType } from '../types/post';
import { generateFromAst } from '../utils/utils';

interface PostPageProps {
  pageContext: {
    page: PostType;
  };
  location: {
    pathname: string;
    href: string;
  };
}

const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const PageHeader = styled.header`
  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};
  ${up('sm')} {
    margin-bottom: ${({ theme: { spacing } }): string => spacing.md4};
  }
`;

const PostPage: FC<PostPageProps> = ({ location, pageContext }) => {
  const breakpoint = useBreakpoint();
  const { page: post } = pageContext || {};
  const totalImages = post.images.length;
  const [{ fixed }] = post.images || [];
  const schemaJson = {
    '@context': 'http://schema.org',
    '@type': 'Recipe',
    author: 'Jeri Mobley',
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
  console.log(post.images);
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
        <Grid columns={breakpoint === 'desktop' ? 12 : 1}>
          <GridCell width={breakpoint === 'desktop' ? 5 : 1}>
            {post.publishDate && <PostDate publishDate={post.publishDate} />}
            <H1>{post.title}</H1>
            {breakpoint !== 'desktop' && (
              <>
                {totalImages > 1 ? (
                  <Carousel>
                    {post.images.map(img => (
                      <Img
                        alt={post.title}
                        key={post.id}
                        style={{ width: '100%' }}
                        fluid={img.fluid}
                      />
                    ))}
                  </Carousel>
                ) : (
                  <Img alt={post.title} fluid={post.images[0].fluid} />
                )}
              </>
            )}
          </GridCell>
          <GridCell width={breakpoint === 'desktop' ? 7 : 1}>
            {breakpoint === 'desktop' && (
              <>
                {totalImages > 1 ? (
                  <Carousel>
                    {post.images.map(img => (
                      <Img
                        alt={post.title}
                        key={post.id}
                        style={{ width: '100%' }}
                        fluid={img.fluid}
                      />
                    ))}
                  </Carousel>
                ) : (
                  <Img alt={post.title} fluid={post.images[0].fluid} />
                )}
              </>
            )}
          </GridCell>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PostPage;
