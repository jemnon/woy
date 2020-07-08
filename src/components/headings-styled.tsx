import styled from 'styled-components';

interface H1Props {
  bottomSpacing?: string;
  whiteSpace?: string;
}

const Headline = styled.h1<H1Props>`
  position: relative;
  font-family: ${({ theme }): string => theme.fonts.noto};
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 1.75rem;
    padding-left: 1.5rem;
    white-space: ${({ whiteSpace }): string => whiteSpace || ''};
    overflow: hidden;
    text-overflow: ellipsis;
  }
  font-size: 1.5rem;
  text-transform: capitalize;
  line-height: 1.5;
  margin: 0;
  margin-bottom: ${({ bottomSpacing }): string => bottomSpacing || '1rem'};
  padding-left: 1rem;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 4px;
    height: 80%;
    transform: translateY(-50%);
    background-color: ${({ theme }): string => theme.colors.orange};
  }
`;

type VerticalRhythm = 'cozy' | 'normal' | 'roomy';
interface H1Props {
  verticalRhythm?: VerticalRhythm;
}

const H1 = styled.h1<H1Props>`
  font-family: ${({ theme }): string => theme.fonts.noto};
  font-size: 3rem;
  line-height: 1.5;
  margin-bottom: ${({ theme }): string => theme.spacing.m};
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 3rem;
    margin-bottom: ${({ theme, verticalRhythm }): string => {
      if (verticalRhythm === 'cozy') {
        return theme.spacing.xs;
      } else if (verticalRhythm === 'normal') {
        return theme.spacing.m;
      } else if (verticalRhythm === 'roomy') {
        return theme.spacing.xl;
      }
      return theme.spacing.m;
    }};
  }
`;

const H2 = styled.h2`
  font-family: ${({ theme }): string => theme.fonts.noto};
  font-size: 1.5rem;
  line-height: 1;
  margin: 0;
  margin-bottom: 1.5rem;
`;

export { Headline, H1, H2 };
