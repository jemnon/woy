import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { FontSizes } from '../../types/theme';

type FontStyle = 'normal' | 'italic';
type FontWeight = 'normal' | 'bold';
type FontSize = keyof FontSizes;

interface ParagraphProps {
  fontStyle?: FontStyle;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}

const Paragraph = styled.p<ParagraphProps>`
  font-family: ${({ theme }): string => theme.fonts.lato};
  font-weight: ${({ fontWeight = 'normal' }): string => fontWeight};
  font-size: ${({ theme, fontSize = 'f1' }): string =>
    theme.fontSizes[fontSize]};
  font-style: ${({ fontStyle = 'normal' }): string => fontStyle};
  ${up('sm')} {
    font-size: ${({ theme, fontSize = 'f2' }): string =>
      theme.fontSizes[fontSize]};
  }

  line-height: 1.5;

  & + &,
  & + * {
    margin-bottom: ${({ theme }): string => theme.spacing.sm4};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export default Paragraph;
