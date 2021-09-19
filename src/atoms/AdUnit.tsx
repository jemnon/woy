import styled, { css, SimpleInterpolation } from 'styled-components';
import { up } from 'styled-breakpoints';

const desktopOnlyCSS = css`
  display: none;
  ${up('md')} {
    margin-bottom: 4rem;
    display: flex;
  }
`;

const mobileOnlyCSS = css`
  display: flex;
  margin-bottom: 1rem;
  ${up('md')} {
    display: none;
  }
`;

const AdUnit = styled.div<{ isDesktopOnly?: boolean; isMobileOnly?: boolean }>`
  display: flex;
  justify-content: center;

  max-width: 100%;
  overflow: hidden;

  ${({ isDesktopOnly }): SimpleInterpolation =>
    isDesktopOnly && desktopOnlyCSS};
  ${({ isMobileOnly }): SimpleInterpolation => isMobileOnly && mobileOnlyCSS};
`;

export default AdUnit;
