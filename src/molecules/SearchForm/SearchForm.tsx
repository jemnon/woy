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

type Size = 'medium' | 'large';
interface SearchFormProps {
  size?: Size;
  onChange: (query: string) => void;
}

const SearchFormContainer = styled.form`
  position: relative;

  display: flex;
  align-items: center;

  padding: 0;
  border: 0;
  outline: none;
  margin: 0;
`;

const SearchButton = styled.button<{ size?: Size }>`
  ${ButtonReset};

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ size = 'medium' }): string =>
    size === 'large' ? '72px' : '53px'};
  height: 100%;

  background-color: ${({ theme: { colors } }): string => colors.nearBlack};
`;

const SearchForm: FC<SearchFormProps> = ({ size = 'medium', onChange }) => {
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
        style={{
          paddingRight: '69px',
          height: size === 'large' ? '72px' : '53px',
        }}
        type="text"
        value={query}
      />
      <SearchButton type="submit" size={size}>
        <Search fill="#fff" fontSize={size === 'large' ? '1.25rem' : '1rem'} />
      </SearchButton>
    </SearchFormContainer>
  );
};

export default SearchForm;
