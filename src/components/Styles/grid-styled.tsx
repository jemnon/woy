import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { SpacingDensity } from '../../types/styles';

type Columns = 1 | 2 | 3 | 4 | 6 | 12;

interface GridProps {
  columns: Columns;
  spacingDensity?: SpacingDensity;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  row-gap: ${({ theme }): string => theme.spacing.s8};
  ${up('md')} {
    column-gap: ${({ theme }): string => theme.spacing.s8};
    grid-template-columns: ${({ columns }): string => {
      return `repeat(${columns}, minmax(0, 1fr))`;
    }};
  }
`;

export default Grid;
