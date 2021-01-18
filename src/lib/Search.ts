import algoliasearch, { SearchIndex, SearchClient } from 'algoliasearch/lite';
import { SearchResponse } from '@algolia/client-search';
import { SearchParams } from '../types/search';

class Search {
  constructor(
    readonly appId: string,
    readonly indexName: string,
    readonly searchKey: string,
  ) {
    this.appId = appId;
    this.indexName = indexName;
    this.searchKey = searchKey;
  }

  private getIndex = (): SearchIndex => {
    const searchClient: SearchClient = algoliasearch(
      this.appId,
      this.searchKey,
    );
    return searchClient.initIndex(this.indexName);
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
