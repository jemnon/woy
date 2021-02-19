import styled, { css, SimpleInterpolation } from 'styled-components';
import { up } from 'styled-breakpoints';

/**
 * Returns a formatted ratio.
 *
 * @param {Number} ratio - 1 / 1
 * @return {string} '100'
 *
 */
export const parseRatio = (ratio: number = 1 / 1): string =>
  Number(ratio * 100).toFixed(2);

interface ImgWrapperProps {
  ratio?: number;
}

const RatioCSS = css<ImgWrapperProps>`
  padding-bottom: ${({ ratio }): SimpleInterpolation =>
    ratio ? `${parseRatio(ratio)}%` : `${parseRatio(1 / 1)}%`};
  ${up('lg')} {
    padding-bottom: ${({ ratio }): SimpleInterpolation =>
      ratio ? `${parseRatio(ratio)}%` : `${parseRatio(9 / 16)}%`};
  }
`;

const ImgWrapper = styled.div<ImgWrapperProps>`
  position: relative;
  width: 100%;

  ${RatioCSS};

  background-color: ${({ theme }): string => theme.colors.nearWhite};

  border-radius: 2px;
  overflow: hidden;

  > * {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute !important;
  }
`;

export default ImgWrapper;
