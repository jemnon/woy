import React, { FC, useState } from 'react';
import Img from 'gatsby-image';
import Container from '../organisms/Container';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import Stack, { StackItem } from '../organisms/Stack';
import Media from '../molecules/Media';
import SearchForm from '../molecules/SearchForm';
import SEO from '../molecules/SEO';
import { H1, H4 } from '../atoms/Headings';
import Link from '../atoms/Link';
import { SearchHit as Hit } from '../types/search';
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
  const { hits } = useInstantSearch(query);
  const isEmpty = hits && hits.length === 0;
  const handleChange = (query: string): void => {
    setQuery(query);
  };
  console.log(hits);
  return (
    <Layout>
      <SEO
        description="Whisper of yum search page"
        image="https://images.ctfassets.net/lz7g6u6kccw7/5ZTQ6JUabdhzkYxGsOWwAN/38506c10912bb5fb03443efb790da33f/creamy_garlic_pork_chops.JPG?w=800&q=60"
        title="Search"
        type="website"
        pathname={location.pathname}
      />
      <Header />
      <Container hasTopMargin maxWidth="md">
        <H1>Search</H1>
        <Stack bottomSpacing="sp-0">
          <StackItem>
            <SearchForm onChange={handleChange} />
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
                            __html: hit.bodyPreview.childMarkdownRemark.html,
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
        </Stack>
      </Container>
    </Layout>
  );
};

export default Search;
