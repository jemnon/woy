import React, { FC } from 'react';
import { navigate } from 'gatsby';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import SEO from '../molecules/SEO';
import Share from '../molecules/Share';
import Breadcrumbs from '../molecules/Breadcrumbs';
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

const PostPage: FC<PostPageProps> = ({ location, pageContext }) => {
  const { page: post } = pageContext || {};
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
        <Grid columns={2}>
          <GridCell width={1}>
            <Breadcrumbs
              onClick={(): void => {
                navigate('/');
              }}
              title={post.title}
            />
          </GridCell>
          <GridCell width={1} justifyContent="flex-end">
            <Share
              description={post.bodyPreview?.bodyPreview}
              media={`https:${fixed?.src}`}
              title={post.title}
              url={location.href}
            />
          </GridCell>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PostPage;
