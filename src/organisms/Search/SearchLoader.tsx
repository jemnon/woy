import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const SearchLoader = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  border: 1px solid;
  border-radius: 100%;
  border-top-color: ${({ theme: th }): string => th.colors.white};
  border-left-color: ${({ theme: th }): string => th.colors.white};
  border-right-color: ${({ theme: th }): string => th.colors.nearBlack};
  border-bottom-color: ${({ theme: th }): string => th.colors.nearBlack};

  animation: ${rotate} 1.1s infinite linear;
`;

export default SearchLoader;
