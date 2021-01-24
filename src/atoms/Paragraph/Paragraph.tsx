import styled from 'styled-components';
import { up } from 'styled-breakpoints';

type FontStyle = 'normal' | 'italic';
type FontWeight = 'normal' | 'bold';

interface ParagraphProps {
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
}

const Paragraph = styled.p<ParagraphProps>`
  font-family: ${({ theme }): string => theme.fonts.lato};
  font-weight: ${({ fontWeight = 'normal' }): string => fontWeight};
  font-size: ${({ theme }): string => theme.fontSizes.f1};
  font-style: ${({ fontStyle = 'normal' }): string => fontStyle};
  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes.f2};
  }

  margin-bottom: ${({ theme }): string => theme.spacing.sm4};
  &:last-child {
    margin-bottom: 0;
  }
`;

export default Paragraph;
