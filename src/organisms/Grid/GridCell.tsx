import styled, { css, SimpleInterpolation } from 'styled-components';
import { Colors } from '../../types/theme';

type TextAlign = 'left' | 'center' | 'right';
type Color = keyof Colors;

interface GridCellProps {
  area?: string;
  bgColor?: Color;
  borderWidth?: string;
  borderColor?: Color;
  height?: number;
  left?: string | number;
  middle?: boolean;
  padding?: string;
  textAlign?: TextAlign;
  top?: string | number;
  width?: number | number[];
}

const MiddleCSS = css`
  display: inline-flex;
  flex-flow: column wrap;
  justify-content: center;
  justify-self: stretch;
`;

const GridCell = styled.div<GridCellProps>`
  grid-column-end: ${({ width = 1 }): string => `span ${width}`};
  grid-row-end: ${({ height = 1 }): string => `span ${height}`};

  ${({ area }): SimpleInterpolation => area && `grid-area: ${area}`};
  ${({ left }): SimpleInterpolation => left && `grid-column-start: ${left}`};
  ${({ top }): SimpleInterpolation => top && `grid-row-start: ${top}`};
  ${({ middle }): SimpleInterpolation => middle && `${MiddleCSS}`};

  text-align: ${({ textAlign = 'left' }): string => textAlign};

  background-color: ${({ bgColor }): SimpleInterpolation => bgColor ?? 'none'};

  border-color: ${({ borderColor = 'nearBlack', theme }): string =>
    theme.colors[borderColor]};
  border-width: ${({ borderWidth = '0' }): string => borderWidth};
  border-style: solid;

  padding: ${({ padding = '0' }): string => padding};

  height: 100%;
  min-width: 0;
`;

export default GridCell;
