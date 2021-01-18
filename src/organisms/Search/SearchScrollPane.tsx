import styled from 'styled-components';

export const SearchScrollPane = styled.div`
  margin-top: ${({ theme: th }): string => th.spacing.s4};
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
`;

export const SearchList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

export const SearchListItem = styled.li`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
