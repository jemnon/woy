import React, { FC, FormEvent, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import SearchButton from './SearchButton';
import useDebounce from './useDebounce';

const SearchFieldForm = styled.form`
  display: grid;
  grid-template-columns: auto 48px;
  grid-template-areas: 'input button';
`;

const SearchInput = styled.input`
  font-family: ${({ theme: th }): string => th.fonts.lato};
  font-size: 1rem;
  grid-area: input;

  padding: ${({ theme: th }): string => th.spacing.s4};

  background-color: ${({ theme: th }): string => th.colors.white};
  border: 1px solid ${({ theme: th }): string => th.colors.nearBlack};
  border-radius: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  transition: ${({ theme: th }): string => th.transition};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus {
    outline: none;
    border-color: ${({ theme: th }): string => th.colors.orange};
  }
`;

interface SearchFieldProps {
  placeholder?: string;
  onChange: (query: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({
  placeholder = 'Search Recipes',
  onChange,
}) => {
  const [query, setQuery] = useState<string>('');
  const input = useRef<HTMLInputElement>(null);
  const debouncedQuery = useDebounce(query);
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };
  const handleChange = (event: FormEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setQuery(event.target.value);
  };
  useEffect(() => {
    if (input && input.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      input.current.focus();
    }
  }, [input]);
  useEffect(() => {
    if (debouncedQuery) {
      onChange(query);
    }
  }, [onChange, query, debouncedQuery]);
  return (
    <SearchFieldForm
      data-id="search-field-form"
      onSubmit={handleSubmit}
      method="POST"
    >
      <SearchInput
        onChange={handleChange}
        placeholder={placeholder}
        ref={input}
        type="text"
        value={query}
      />
      <SearchButton />
    </SearchFieldForm>
  );
};

export default SearchField;
