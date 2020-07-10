import styled, { css } from 'styled-components';
import { HeadlineProps, HeadingProps } from '../../types/styles';

const Headline = styled.h1<HeadlineProps>`
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

const BaseHeadingStyles = css<HeadingProps>`
  font-family: ${({ theme }): string => theme.fonts.noto};
  line-height: 1.5;
  text-align: ${({ textAlign }): string => textAlign || 'left'};

  margin: 0;
  margin-bottom: ${({ theme, verticalRhythm }): string => {
    if (verticalRhythm === 'cozy') {
      return theme.spacing.xxs;
    } else if (verticalRhythm === 'normal') {
      return theme.spacing.m;
    } else if (verticalRhythm === 'roomy') {
      return theme.spacing.l;
    }
    return theme.spacing.m;
  }};

  @media ${({ theme }): string => theme.breakpoints.desktop} {
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

const H1 = styled.h1<HeadingProps>`
  ${BaseHeadingStyles}
  font-size: 2.25rem;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 3rem;
  }
`;

const H2 = styled.h2<HeadingProps>`
  ${BaseHeadingStyles}
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 1.5rem;
  }
`;

export { Headline, H1, H2 };
