import React, { FC } from 'react';
import Img from 'gatsby-image';
import Container from '../organisms/Container';
import Grid, { GridCell } from '../organisms/Grid';
import Layout from '../organisms/Layout';
import Stack, { StackItem } from '../organisms/Stack';
import MarkdownList from '../molecules/MarkdownList';
import SEO from '../molecules/SEO';
import ImgWrapper from '../atoms/ImgWrapper';
import Paragraph from '../atoms/Paragraph';
import Text from '../atoms/Text';
import { H1, H4 } from '../atoms/Headings';
import { Post as PostType } from '../types/post';

interface RecipePrintPageProps {
  pageContext: {
    page: PostType;
  };
}

const RecipePrintPage: FC<RecipePrintPageProps> = ({
  pageContext: { page },
}) => {
  return (
    <Layout>
      <SEO />
      <Container hasTopMargin={false} maxWidth="md">
        <H1 textAlign="center">{page.title}</H1>
        <Grid columns={1} style={{ maxWidth: '400px', margin: '0 auto 1rem' }}>
          <GridCell width={1} middle>
            {page.images[0].fluid && (
              <ImgWrapper ratio={1 / 1}>
                <Img alt={page.title} fluid={page.images[0].fluid} />
              </ImgWrapper>
            )}
          </GridCell>
        </Grid>
        {page.bodyPreview && (
          <Paragraph fontSize="f2">{page.bodyPreview.bodyPreview}</Paragraph>
        )}
        <Stack bottomSpacing="sm4">
          <StackItem bottomSpacing="sp-0">
            <Text display="inline" fontSize="f2" fontWeight="bold">
              Total Time:{' '}
            </Text>
            <Text display="inline" fontSize="f2">
              {page.totalTime}
            </Text>
          </StackItem>
          <StackItem bottomSpacing="sp-0">
            <Text display="inline" fontSize="f2" fontWeight="bold">
              Servings:{' '}
            </Text>
            <Text display="inline" fontSize="f2">
              {page.servings}
            </Text>
          </StackItem>
        </Stack>
        <Grid columns={2}>
          <GridCell width={1}>
            {page.ingredients && <H4 bottomSpacing="sp-0">Ingredients</H4>}
            {page.ingredients?.childMarkdownRemark && (
              <MarkdownList
                dangerouslySetInnerHTML={{
                  __html: page.ingredients?.childMarkdownRemark?.html,
                }}
              />
            )}
            {page.optionalIngredients && (
              <>
                {page.optionalIngredients?.childMarkdownRemark && (
                  <MarkdownList
                    dangerouslySetInnerHTML={{
                      __html:
                        page.optionalIngredients?.childMarkdownRemark?.html,
                    }}
                  />
                )}
              </>
            )}
          </GridCell>
          <GridCell width={1}>
            {page.instructions && <H4 bottomSpacing="sp-0">Instructions</H4>}
            {page.instructions?.childMarkdownRemark && (
              <MarkdownList
                dangerouslySetInnerHTML={{
                  __html: page.instructions?.childMarkdownRemark?.html,
                }}
              />
            )}
          </GridCell>
        </Grid>
      </Container>
    </Layout>
  );
};

export default RecipePrintPage;
