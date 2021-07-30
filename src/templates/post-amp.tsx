import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '../atoms/Box';
import GlobalStyle from '../atoms/GlobalStyle';
import Heading from '../atoms/Heading';
import Spacer from '../atoms/Spacer';
import Text from '../atoms/Text';
import { VStack } from '../organisms/Stack';
import theme from '../theme';
import SEO from '../molecules/SEO';
import { generateFromAst } from '../utils/utils';
import { Post as PostType } from '../types/post';

interface PostPageAMPProps {
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

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const boilerplate =
  'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}';
const noscriptBoilerplate =
  'body{-webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none}';
const custom =
  'amp-story-page { background-color: #000;  } amp-story-page h1, h2, h3, h4, h5, h6 { color: #fff; } amp-img { opacity: 0.7; } .content { display: flex; flex-direction: column; justify-content: flex-end; }';

const PostPageAMP: FC<PostPageAMPProps> = ({ pageContext }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            author
            siteUrl
          }
        }
      }
    `,
  );
  const { page: post } = pageContext || {};
  const [{ fixed }] = post.images || [];
  // const len = post.webStory?.[0].pages.length;
  const schemaJson = {
    '@context': 'http://schema.org',
    '@type': 'Recipe',
    author: 'Jeri Mobley-Arias',
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
  };
  const ampJson = {
    vars: {
      gtag_id: 'UA-163607733-1',
      config: {
        'UA-163607733-1': { groups: 'default' },
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <SEO
          ampEnabled
          ampBoilerplate={boilerplate}
          ampNoscript={noscriptBoilerplate}
          ampCustom={custom}
          description={`${post.bodyPreview?.bodyPreview}`}
          title={`${capitalize(post.title)} | Whisper of Yum`}
          type="article"
          image={`https:${fixed?.src}`}
          pathname={`/post/${post.slug}`}
          script={JSON.stringify(schemaJson)}
        />
        <amp-story
          standalone
          title={`${capitalize(post.title)}`}
          publisher="Whipser of Yum"
          publisher-logo-src="/logo-white.png"
          poster-portrait-src=""
        >
          <amp-story-page id="cover">
            <amp-story-grid-layer template="fill">
              <amp-img
                alt=""
                src={post.webStory?.[0].coverPageAsset.fixed.src}
                width="720"
                height="1280"
                layout="responsive"
              />
            </amp-story-grid-layer>
            <amp-story-grid-layer template="thirds">
              <div grid-area="middle-third">
                <VStack sp="sm3">
                  <Heading alignment="center" c="white" lh="1.25" textSize="f3">
                    whisperofyum.com
                  </Heading>
                  <Heading
                    as="h2"
                    alignment="center"
                    c="white"
                    level="3"
                    lh="1.25"
                  >
                    {post.webStory?.[0].coverPageTitle}
                  </Heading>
                </VStack>
              </div>
            </amp-story-grid-layer>
            <amp-story-page-attachment
              layout="nodisplay"
              cta-text="View Recipe"
              href={`${site.siteMetadata.siteUrl}/post/${post.slug}`}
            />
          </amp-story-page>
          {post.webStory?.[0].storyPages.map((page, key: number) => (
            <amp-story-page id={`page${key + 1}`} key={`page-${key}`}>
              <amp-story-grid-layer template="fill">
                <amp-img
                  alt=""
                  src={page.asset.fixed.src}
                  width="720"
                  height="1280"
                  layout="responsive"
                />
              </amp-story-grid-layer>
              <amp-story-grid-layer>
                <div className="content">
                  <Box
                    bgColor="nearBlack"
                    bgColorAlpha={75}
                    padding="sm3"
                    height="auto"
                  >
                    <Text
                      textAlign="center"
                      textColor="white"
                      as="div"
                      fontSize="f1"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            page.description?.childMarkdownRemark?.html ?? '',
                        }}
                      />
                    </Text>
                  </Box>
                  <Spacer sp={[null, 'xlg3', 'xlg1', 'lg3']} />
                </div>
              </amp-story-grid-layer>
              <amp-story-page-attachment
                layout="nodisplay"
                cta-text="View Recipe"
                href={`${site.siteMetadata.siteUrl}/post/${post.slug}`}
              />
            </amp-story-page>
          ))}
          <amp-story-page id="last-page">
            <amp-story-grid-layer template="fill">
              <amp-img
                alt=""
                src={post.webStory?.[0].lastPageAsset.fixed.src}
                width="720"
                height="1280"
                layout="responsive"
              />
            </amp-story-grid-layer>
            <amp-story-grid-layer template="thirds">
              <div
                grid-area="middle-third"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div>
                  <Box bgColor="orange" padding="sm3">
                    <VStack sp="sp-0">
                      <Text as="div" textColor="white">
                        <Box
                          bgColorAlpha={0}
                          dangerouslySetInnerHTML={{
                            __html:
                              post.webStory?.[0]?.lastPageDescription
                                ?.childMarkdownRemark?.html ?? '',
                          }}
                        />
                      </Text>
                      <Heading
                        alignment="center"
                        as="h4"
                        c="white"
                        textSize="f3"
                      >
                        {post.webStory?.[0]?.lastPageUrl ?? 'whisperofyum.com'}
                      </Heading>
                    </VStack>
                  </Box>
                </div>
              </div>
            </amp-story-grid-layer>
            <amp-story-page-attachment
              layout="nodisplay"
              cta-text="View Recipe"
              href={`${site.siteMetadata.siteUrl}/post/${post.slug}`}
            />
          </amp-story-page>
        </amp-story>
        <amp-analytics type="gtag" data-credentials="include">
          <script type="application/json">{`${JSON.stringify(
            ampJson,
          )}`}</script>
        </amp-analytics>
      </Container>
    </ThemeProvider>
  );
};

export default PostPageAMP;
