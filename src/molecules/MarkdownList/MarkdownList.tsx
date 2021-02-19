import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

const SharedListCSS = css`
  padding-left: ${({ theme: { spacing } }): string => spacing.md4};
  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};

  font-size: ${({ theme: { fontSizes } }): string => fontSizes.f1};
  ${up('sm')} {
    font-size: ${({ theme: { fontSizes } }): string => fontSizes.f2};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const MarkdownList = styled.div`
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
