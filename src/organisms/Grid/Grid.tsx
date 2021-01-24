import { ReactNode } from 'react';
import styled from 'styled-components';
import { Spacing } from '../../types/theme';

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
type ColumnGap = keyof Spacing;
type RowGap = ColumnGap;

interface GridProps {
  children?: ReactNode;
  columns?: Columns | 'auto-fill';
  columnGap?: ColumnGap;
  columnWidth?: string;
  rowGap?: RowGap;
}

const Grid = styled.section<GridProps>`
  display: grid;
  justify-items: center;
  row-gap: ${({ theme, columnGap = 'md1' }): string =>
    theme.spacing[columnGap]};
  column-gap: ${({ theme, rowGap = 'md1' }): string => theme.spacing[rowGap]};
  grid-template-columns: ${({
    columns = 'auto-fill',
    columnWidth = '100px',
  }): string => `repeat(${columns}, minmax(${columnWidth}, 1fr))`};

  & + & {
    margin-top: 1rem;
  }

  > * {
    align-self: center;
  }
`;

export const GridCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Grid;
