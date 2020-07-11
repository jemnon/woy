import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { SpacingDensity } from '../../types/styles';

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  columns: Columns;
  spacingDensity?: SpacingDensity;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  row-gap: 1rem;
  ${up('md')} {
    column-gap: 2rem;
    row-gap: 2rem;
    grid-template-columns: ${({ columns }): string => {
      return `repeat(${columns}, minmax(0, 1fr))`;
    }};
  }
`;

export default Grid;
