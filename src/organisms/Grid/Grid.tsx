import styled from 'styled-components';
import { Spacing } from '../../types/theme';

type Alignment =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'normal';
type GapSpacing = keyof Spacing;
type Flow = 'row' | 'column' | 'dense' | 'row dense' | 'column dense';

const getFR = (value: number | string): number | string =>
  typeof value === 'number' ? `repeat(${value}, 1fr)` : value;

interface GridProps {
  alignContent?: Alignment;
  areas?: string[];
  columns?: string | number;
  columnGap?: GapSpacing;
  flow?: Flow;
  gap?: GapSpacing;
  justifyContent?: Alignment;
  height?: string;
  minRowHeight?: string;
  rows?: string | number;
  rowGap?: GapSpacing;
}

const Grid = styled.section<GridProps>`
  display: grid;

  grid-auto-flow: ${({ flow = 'row' }): string => flow};
  grid-auto-rows: ${({ minRowHeight = '1rem' }): string =>
    `minmax(${minRowHeight}, auto)`};

  grid-template-rows: ${({ rows }): string =>
    rows ? `${getFR(rows)}` : 'none'};
  grid-template-columns: ${({ columns = 12 }): string => {
    return `${getFR(columns)}`;
  }};
  grid-template-areas: ${({ areas }): string =>
    areas ? areas.map(area => `"${area}"`).join(' ') : 'none'};

  gap: ${({ theme, gap = 'md4' }): string => theme.spacing[gap]};
  row-gap: ${({ theme, rowGap = 'md4' }): string => theme.spacing[rowGap]};
  column-gap: ${({ theme, gap = 'md4' }): string => theme.spacing[gap]};

  align-content: ${({ alignContent = 'normal' }): string => alignContent};
  justify-content: ${({ justifyContent = 'normal' }): string => justifyContent};

  height: ${({ height = 'auto' }): string => height};
`;

export default Grid;
