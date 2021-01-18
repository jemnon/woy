import React, { FC, useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import SearchHit from './SearchHit';
import SearchField from './SearchField';
import {
  SearchScrollPane,
  SearchList,
  SearchListItem,
} from './SearchScrollPane';
import { SearchProps, SearchHit as Hit } from '../../types/search';
import useInstantSearch from '../../hooks/useInstantSearch';
import useOutsideClick from '../../hooks/useOutsideClick';

interface SearchContainerProps {
  isFixed?: boolean;
}

const fixedCSS = css`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: ${({ theme: th }): string => th.zIndex.z3};

  box-shadow: 0px 4px 3px 0px rgba(17, 17, 17, 0.19);
`;

const SearchContainer = styled.section<SearchContainerProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 26rem;
  max-height: 26rem;
  padding: ${({ theme: th }): string => th.spacing.s4};

  background-color: ${({ theme: th }): string => th.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);

  overflow: hidden;

  ${({ isFixed }): string => {
    if (isFixed) {
      return `${fixedCSS}`;
    }
    return '';
  }}
`;

const SearchEmptyHits = styled.div`
  padding-top: ${({ theme: th }): string => th.spacing.s8};
  padding-bottom: ${({ theme: th }): string => th.spacing.s4};

  font-size: 1rem;
  font-family: ${({ theme: th }): string => th.fonts.lato};
  text-align: center;
`;

const Search: FC<SearchProps> = ({
  appId,
  indexName,
  isFixed = true,
  onClick,
  onOutsideClick,
  searchKey,
}) => {
  const [query, setQuery] = useState<string>('');
  const ref = useRef<HTMLElement | null>(null);
  const [refCurrent, setRefCurrent] = useState<HTMLElement | null>(null);
  const { hits } = useInstantSearch(query, {
    appId,
    indexName,
    searchKey,
  });
  const isEmpty = hits && hits.length === 0;
  useOutsideClick(refCurrent as any, onOutsideClick);
  useEffect(() => {
    if (ref.current) {
      setRefCurrent(ref.current);
    }
  }, [ref]);
  return (
    <SearchContainer isFixed={isFixed} ref={ref}>
      <SearchField onChange={setQuery} />
      {hits && hits.length > 0 && (
        <SearchScrollPane>
          <SearchList>
            {hits.map((hit: any): any => (
              <SearchListItem key={hit.objectID}>
                <SearchHit
                  bodyPreview={hit.bodyPreview}
                  categories={hit.categories}
                  images={hit.images}
                  objectID={hit.objectID}
                  onClick={onClick}
                  slug={hit.slug}
                  title={hit.title}
                />
              </SearchListItem>
            ))}
          </SearchList>
        </SearchScrollPane>
      )}
      {isEmpty && <SearchEmptyHits>No Results</SearchEmptyHits>}
    </SearchContainer>
  );
};

export default Search;
