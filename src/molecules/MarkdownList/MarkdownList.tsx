import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { FontSizes } from '../../types/theme';

type FontSize = keyof FontSizes;

interface MarkdownListProps {
  fontSize?: FontSize;
}

const SharedListCSS = css<MarkdownListProps>`
  padding-left: ${({ theme: { spacing } }): string => spacing.md4};
  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};

  font-size: ${({ fontSize, theme: { fontSizes } }): string =>
    fontSize ? fontSizes[fontSize] : fontSizes.f1};
  ${up('sm')} {
    font-size: ${({ fontSize, theme: { fontSizes } }): string =>
      fontSize ? fontSizes[fontSize] : fontSizes.f2};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const MarkdownList = styled.div<MarkdownListProps>`
  ul {
    ${SharedListCSS};
    list-style-type: disc;
  }
  ol {
    ${SharedListCSS};
    > li {
      margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default MarkdownList;
