import React, { FC } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import Grid, { GridCell } from '../organisms/Grid';
import Layout from '../organisms/Layout';
import Stack, { StackItem } from '../organisms/Stack';
import PrintButton from '../molecules/PrintButton';
import MarkdownList from '../molecules/MarkdownList';
import SEO from '../molecules/SEO';
import Button from '../atoms/Button';
import ImgWrapper from '../atoms/ImgWrapper';
import Paragraph from '../atoms/Paragraph';
import Text from '../atoms/Text';
import { H1, H4 } from '../atoms/Headings';
import useBreakpoint from '../hooks/useBreakpoint';
import { Post as PostType } from '../types/post';

interface RecipePrintPageProps {
  pageContext: {
    page: PostType;
  };
}

const RecipePrintPageButtons = styled.div`
  @media print {
    display: none;
    height: 0;
  }
`;

const RecipePrintPageTitle = styled.h1`
  font-size: ${({ theme: { fontSizes } }): string => fontSizes.f9};
`;

const RecipePrintPageSubTitle = styled.h4`
  font-size: ${({ theme: { fontSizes } }): string => fontSizes.f2};
`;

const PrintPageContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme: { spacing } }): string => spacing.sm4};

  max-width: 60rem;
`;

const RecipePrintPage: FC<RecipePrintPageProps> = ({
  pageContext: { page },
}) => {
  const breakpoint = useBreakpoint();
  const handleBackClick = (): void => {
    navigate(`/post/${page.slug}`);
  };
  const handlePrint = (): void => {
    if (window) window.print();
  };
  return (
    <Layout>
      <SEO />
      <PrintPageContainer>
        <RecipePrintPageButtons>
          <Stack
            bottomSpacing="sm4"
            flow={breakpoint === 'desktop' ? 'row' : 'column'}
            justifyContent="center"
          >
            <StackItem
              flow={breakpoint === 'desktop' ? 'row' : 'column'}
              rightSpacing="sm4"
            >
              <Button
                colorScheme="nearBlack"
                onClick={handleBackClick}
                shape="rectangle"
                size="small"
                variant="outline"
                width={breakpoint === 'desktop' ? 'auto' : '100%'}
              >
                Back
              </Button>
            </StackItem>
            <StackItem flow={breakpoint === 'desktop' ? 'row' : 'column'}>
              <PrintButton
                colorScheme="nearBlack"
                onClick={handlePrint}
                width={breakpoint === 'desktop' ? 'auto' : '100%'}
              />
            </StackItem>
          </Stack>
        </RecipePrintPageButtons>
        <Grid columns={breakpoint === 'desktop' ? 12 : 1} rowGap="sp-0">
          <GridCell width={breakpoint === 'desktop' ? 10 : 1}>
            <RecipePrintPageTitle as={H1} bottomSpacing="0">
              {page.title}
            </RecipePrintPageTitle>
            <Text fontSize="f-sm" fontWeight="bold">
              By Whisper of Yum
            </Text>
            <Stack bottomSpacing="sm4" flow="row">
              <StackItem bottomSpacing="sp-0" flow="row" rightSpacing="sm4">
                <Text display="inline" fontSize="f-sm" fontWeight="bold">
                  Total Time:{' '}
                </Text>
                <Text display="inline" fontSize="f-sm">
                  {page.totalTime}
                </Text>
              </StackItem>
              <StackItem bottomSpacing="sp-0">
                <Text display="inline" fontSize="f-sm" fontWeight="bold">
                  Servings:{' '}
                </Text>
                <Text display="inline" fontSize="f-sm">
                  {page.servings}
                </Text>
              </StackItem>
            </Stack>
          </GridCell>
          <GridCell width={breakpoint === 'desktop' ? 2 : 1} middle>
            {page.images[0].fluid && (
              <div
                style={{
                  width: '100%',
                  maxWidth: '128px',
                  marginBottom: '1rem',
                }}
              >
                <ImgWrapper ratio={1 / 1}>
                  <Img alt={page.title} fluid={page.images[0].fluid} />
                </ImgWrapper>
              </div>
            )}
          </GridCell>
        </Grid>
        <Grid columns={breakpoint === 'desktop' ? 2 : 1} rowGap="sm4">
          <GridCell width={1}>
            {page.ingredients && (
              <RecipePrintPageSubTitle as={H4} bottomSpacing="sp-0">
                Ingredients
              </RecipePrintPageSubTitle>
            )}
            {page.ingredients?.childMarkdownRemark && (
              <MarkdownList
                fontSize="f-xsm"
                dangerouslySetInnerHTML={{
                  __html: page.ingredients?.childMarkdownRemark?.html,
                }}
              />
            )}
            {page.optionalIngredients && (
              <>
                {page.optionalIngredients?.childMarkdownRemark && (
                  <MarkdownList
                    fontSize="f-xsm"
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
            {page.instructions && (
              <RecipePrintPageSubTitle as={H4} bottomSpacing="sp-0">
                Instructions
              </RecipePrintPageSubTitle>
            )}
            {page.instructions?.childMarkdownRemark && (
              <MarkdownList
                fontSize="f-xsm"
                dangerouslySetInnerHTML={{
                  __html: page.instructions?.childMarkdownRemark?.html,
                }}
              />
            )}
          </GridCell>
        </Grid>
      </PrintPageContainer>
    </Layout>
  );
};

export default RecipePrintPage;
