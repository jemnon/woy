import React, { FC, useState } from 'react';
import Img from 'gatsby-image';
import { up } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import Container from '../organisms/Container';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import Stack, { StackItem } from '../organisms/Stack';
import BackToTop from '../molecules/BackToTop';
import Media from '../molecules/Media';
import SearchForm from '../molecules/SearchForm';
import SEO from '../molecules/SEO';
import { H1, H6 } from '../atoms/Headings';
import Link from '../atoms/Link';
import Text from '../atoms/Text';
import useInstantSearch from '../hooks/useInstantSearch';

interface SearchPageProps {
  location: {
    pathname: string;
    search: string;
  };
}

const Search: FC<SearchPageProps> = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const queryParam = params.get('query') || '';
  const [query, setQuery] = useState<string>(queryParam);
  const isMediumUp = useBreakpoint(up('md'));
  const { hits } = useInstantSearch(query);
  const isEmpty = hits && hits.length === 0;
  const showBackToTop = hits && hits.length >= 4;
  const handleChange = (query: string): void => {
    setQuery(query);
  };
  return (
    <Layout>
      <SEO title="Search" type="website" pathname={location.pathname} />
      <Header />
      <Container hasTopMargin maxWidth="md">
        <H1>Search</H1>
        <Stack>
          <StackItem>
            <SearchForm
              onChange={handleChange}
              size={isMediumUp ? 'large' : 'medium'}
            />
          </StackItem>
          {hits && hits.length > 0 && (
            <>
              {hits.map((hit: any): any => (
                <StackItem key={hit.objectID}>
                  <Link to={`/post/${hit.slug}`}>
                    <Media
                      description={
                        <div
                          dangerouslySetInnerHTML={{
                            __html: hit?.bodyPreview?.childMarkdownRemark?.html,
                          }}
                        />
                      }
                      publishDate={hit.publishDate}
                      title={hit.title}
                      image={
                        <Img alt={hit.title} fluid={hit.images[0].fluid} />
                      }
                    />
                  </Link>
                </StackItem>
              ))}
            </>
          )}
          {isEmpty && (
            <StackItem>
              <Text textAlign="center">No Results</Text>
            </StackItem>
          )}
          {hits === null && (
            <StackItem>
              <H6>Suggestions</H6>
              <Stack bottomSpacing="sp-0">
                <StackItem bottomSpacing="sm1">
                  <Link to="/post/chicken-congee">
                    <Text
                      fontSize={isMediumUp ? 'f2' : 'f1'}
                      textColor="orange"
                    >
                      Chicken Congee
                    </Text>
                  </Link>
                </StackItem>
                <StackItem bottomSpacing="sm1">
                  <Link to="/post/creamy-garlic-mushroom-pork-chops">
                    <Text
                      fontSize={isMediumUp ? 'f2' : 'f1'}
                      textColor="orange"
                    >
                      Creamy Garlic Mushroom Pork Chops
                    </Text>
                  </Link>
                </StackItem>
                <StackItem bottomSpacing="sm1">
                  <Link to="/post/oven-baked-coconut-shrimp">
                    <Text
                      fontSize={isMediumUp ? 'f2' : 'f1'}
                      textColor="orange"
                    >
                      Crispy Baked Coconut Shrimp
                    </Text>
                  </Link>
                </StackItem>
                <StackItem bottomSpacing="sm1">
                  <Link to="/post/mushroom-soup">
                    <Text
                      fontSize={isMediumUp ? 'f2' : 'f1'}
                      textColor="orange"
                    >
                      Mushroom Soup
                    </Text>
                  </Link>
                </StackItem>
                <StackItem bottomSpacing="sm1">
                  <Link to="/post/filipino-pork-adobo">
                    <Text
                      fontSize={isMediumUp ? 'f2' : 'f1'}
                      textColor="orange"
                    >
                      Filipino Pork Adobo
                    </Text>
                  </Link>
                </StackItem>
              </Stack>
            </StackItem>
          )}
        </Stack>
        {showBackToTop && <BackToTop />}
      </Container>
    </Layout>
  );
};

export default Search;
