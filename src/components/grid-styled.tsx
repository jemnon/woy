import styled from 'styled-components';

interface GridProps {
  columns: number;
}

const Grid = styled.div<GridProps>`
  display: grid;
  row-gap: 1rem;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    column-gap: 2rem;
    row-gap: 2rem;
    grid-template-columns: ${({ columns }): string => {
      return `repeat(${columns}, minmax(0, 1fr))`;
    }};
  }
`;

export default Grid;
