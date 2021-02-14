import React, {
  FC,
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useRef,
} from 'react';
import styled from 'styled-components';
import { ButtonReset } from '../../atoms/Button';
import { Search } from '../../atoms/Icons';
import TextField from '../../atoms/TextField';
import useDebounce from '../../hooks/useDebounce';

interface SearchFormProps {
  onChange: (query: string) => void;
}

const SearchFormContainer = styled.form`
  position: relative;

  display: flex;
  align-items: center;
`;

const SearchButton = styled.button`
  ${ButtonReset};

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 53px;
  height: 53px;

  background-color: ${({ theme: { colors } }): string => colors.nearBlack};
`;

const SearchForm: FC<SearchFormProps> = ({ onChange }) => {
  const [query, setQuery] = useState<string>('');
  const input = useRef<HTMLInputElement>(null);
  const debouncedQuery = useDebounce(query);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target as HTMLInputElement;
    setQuery(value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };
  useEffect(() => {
    if (input && input.current) {
      input.current.focus();
    }
  }, [input]);
  useEffect(() => {
    if (debouncedQuery) {
      onChange(query);
    }
  }, [onChange, query, debouncedQuery]);

  return (
    <SearchFormContainer onSubmit={handleSubmit} method="POST">
      <TextField
        onChange={handleChange}
        placeholder="Search Recipes"
        ref={input}
        style={{ paddingRight: '69px' }}
        type="text"
        value={query}
      />
      <SearchButton type="submit">
        <Search fill="#fff" fontSize="1rem" />
      </SearchButton>
    </SearchFormContainer>
  );
};

export default SearchForm;
