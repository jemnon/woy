import React, { FC, useState } from 'react';
import Img from 'gatsby-image';
import Container from '../organisms/Container';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import Stack, { StackItem, VStack } from '../organisms/Stack';
import BackToTop from '../molecules/BackToTop';
import Media from '../molecules/Media';
import SearchForm from '../molecules/SearchForm';
import SEO from '../molecules/SEO';
import { H1, H6 } from '../atoms/Headings';
import Link from '../atoms/Link';
import Text from '../atoms/Text';
import useBreakpoint from '../hooks/useBreakpoint';
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
  const breakpoint = useBreakpoint();
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
        <VStack>
          <SearchForm
            onChange={handleChange}
            size={breakpoint === 'desktop' ? 'large' : 'medium'}
          />
          {hits && hits.length > 0 && (
            <VStack sp={[null, null, 'md1', 'md4']}>
              {hits.map((hit: any): any => (
                <Link key={hit.objectID} to={`/post/${hit.slug}`}>
                  <Media
                    description={
                      <div
                        dangerouslySetInnerHTML={{
                          __html: hit.bodyPreview.childMarkdownRemark.html,
                        }}
                      />
                    }
                    publishDate={hit.publishDate}
                    title={hit.title}
                    image={<Img alt={hit.title} fluid={hit.images[0].fluid} />}
                  />
                </Link>
              ))}
            </VStack>
          )}
          {isEmpty && <Text textAlign="center">No Results</Text>}
          {hits === null && (
            <div>
              <H6>Suggestions</H6>
              <Link to="/post/chicken-congee">
                <Text
                  fontSize={breakpoint === 'desktop' ? 'f2' : 'f1'}
                  textColor="orange"
                >
                  Chicken Congee
                </Text>
              </Link>
              <Link to="/post/creamy-garlic-mushroom-pork-chops">
                <Text
                  fontSize={breakpoint === 'desktop' ? 'f2' : 'f1'}
                  textColor="orange"
                >
                  Creamy Garlic Mushroom Pork Chops
                </Text>
              </Link>
              <Link to="/post/oven-baked-coconut-shrimp">
                <Text
                  fontSize={breakpoint === 'desktop' ? 'f2' : 'f1'}
                  textColor="orange"
                >
                  Crispy Baked Coconut Shrimp
                </Text>
              </Link>
              <Link to="/post/mushroom-soup">
                <Text
                  fontSize={breakpoint === 'desktop' ? 'f2' : 'f1'}
                  textColor="orange"
                >
                  Mushroom Soup
                </Text>
              </Link>
              <Link to="/post/filipino-pork-adobo">
                <Text
                  fontSize={breakpoint === 'desktop' ? 'f2' : 'f1'}
                  textColor="orange"
                >
                  Filipino Pork Adobo
                </Text>
              </Link>
            </div>
          )}
        </VStack>
        {showBackToTop && <BackToTop />}
      </Container>
    </Layout>
  );
};

export default Search;
