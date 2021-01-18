import { useEffect, useState, useMemo } from 'react';
import { SearchResponse } from '@algolia/client-search';
import Search from '../lib/Search';
import { SearchConfig } from '../types/search';

interface InstantSearchState {
  isLoading: boolean;
  hits: SearchResponse['hits'];
  error: string | null;
}

const useInstantSearch = (
  query?: string,
  config?: SearchConfig,
): InstantSearchState => {
  const { appId, indexName, searchKey } = config || {};
  const search = useMemo(
    () => new Search(appId || '', indexName || '', searchKey || ''),
    [appId, indexName, searchKey],
  );
  const [hits, setHits] = useState<SearchResponse['hits'] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const params = { distinct: 6, hitsPerPage: 10, page: 0 };
        const resp = await search.getSearch(query || '', params);
        setHits(resp?.hits);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    if (query) {
      fetchData();
    }
  }, [query, search]);
  // @ts-ignore
  return { error, hits, isLoading };
};

export default useInstantSearch;
