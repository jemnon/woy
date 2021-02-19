import algoliasearch, { SearchIndex, SearchClient } from 'algoliasearch/lite';
import { SearchResponse } from '@algolia/client-search';
import { SearchParams } from '../types/search';

class Search {
  private getIndex = (): SearchIndex => {
    const searchClient: SearchClient = algoliasearch(
      process.env.GATSBY_ALGOLIA_APP_ID || '',
      process.env.GATSBY_ALGOLIA_API_KEY || '',
    );
    return searchClient.initIndex(process.env.GATSBY_ALGOLIA_INDEX_NAME || '');
  };

  public getSearch = async (
    query: string,
    params: SearchParams,
  ): Promise<SearchResponse> => {
    const client = this.getIndex();
    const results = await client.search(query, { ...params, facets: ['*'] });
    return {
      ...results,
    };
  };
}

export default Search;
