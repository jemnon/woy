import { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { SpacingDensity } from '../../types/styles';

interface BottomSpacingProps {
  spacingDensity?: SpacingDensity;
}

export const BottomSpacing = css<BottomSpacingProps>`
  margin-bottom: ${({ theme, spacingDensity }): string => {
    if (spacingDensity === 'cozy') {
      return theme.spacing.s2;
    } else if (spacingDensity === 'normal') {
      return theme.spacing.s4;
    } else if (spacingDensity === 'roomy') {
      return theme.spacing.s5;
    }
    return theme.spacing.s4;
  }};

  ${up('md')} {
    margin-bottom: ${({ theme, spacingDensity }): string => {
      if (spacingDensity === 'cozy') {
        return theme.spacing.s3;
      } else if (spacingDensity === 'normal') {
        return theme.spacing.s4;
      } else if (spacingDensity === 'roomy') {
        return theme.spacing.s6;
      }
      return theme.spacing.s4;
    }};
  }
`;

export default BottomSpacing;
