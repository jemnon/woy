import React, { FC, useState, useEffect, createRef } from 'react';
import { InstantSearch, SearchBox, connectHits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { Root } from './search-styled';
import { useStaticQuery } from 'gatsby';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID || '',
  process.env.GATSBY_ALGOLIA_API_SEARCH_KEY || '',
);

const Hits = connectHits(({ hits }) => {
  console.log(hits);
  return (
    <div>
      {hits.length ? (
        <>
          <ul>
            {hits.map(hit => {
              return <li key={hit.objectID}>{hit.title}</li>;
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
});

const Search: FC = () => {
  const s = searchClient.initIndex(process.env.GATSBY_ALGOLIA_INDEX_NAME || '');
  useEffect(() => {
    const fetch = async () => {
      const results = await s.search('wine');
      console.log(results);
    };
    if (s) {
      fetch();
    }
  }, [s]);
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME || ''}
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
};

export default Search;
