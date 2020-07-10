import styled from 'styled-components';
import { ParagraphProps } from '../../types/styles';

export const P = styled.p<ParagraphProps>`
  font-family: ${({ theme }): string => theme.fonts.lato};
  text-align: ${({ textAlign }): string => textAlign || 'left'};

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

export default P;
