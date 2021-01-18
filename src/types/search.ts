import { ObjectWithObjectID } from '@algolia/client-search';

export interface SearchConfig {
  /**
   * Algolia application id.
   */
  appId: string;
  /**
   * Algolia index to search.
   */
  indexName: string;
  /**
   * Algolia search key.
   */
  searchKey: string;
}

export interface Category {
  name: string;
}

export interface Image {
  fluid: {
    aspectRatio: number;
    src: string;
    srcSet: string;
  };
}

export interface SearchHit extends ObjectWithObjectID {
  bodyPreview: {
    childMarkdownRemark: {
      html: string;
    };
  };
  categories: Category[];
  images: Image[];
  objectID: string;
  slug: string;
  title: string;
}

export interface SearchHitProps extends SearchHit {
  /**
   * Search hit click handler.
   */
  onClick: (slug: string) => void;
}

export interface SearchProps extends SearchConfig {
  isFixed?: boolean;
  /**
   * Search click handler.
   */
  onClick: (slug: string) => void;
  /**
   * Search outside click handler.
   */
  onOutsideClick: (event: MouseEvent) => void;
}

export interface SearchParams {
  /**
   * Algolia distinct search param.
   */
  distinct: number;
  /**
   * Number of hits to return per page.
   */
  hitsPerPage: number;
  /**
   * Algolia search pagination.
   */
  page: number;
}
