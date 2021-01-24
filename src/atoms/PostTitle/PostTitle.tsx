import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const PostTitle = styled.h2`
  font-family: ${({ theme }): string => theme.fonts.lato};
  font-weight: bold;
  font-size: ${({ theme }): string => theme.fontSizes.f1};
  ${up('md')} {
    font-size: ${({ theme }): string => theme.fontSizes.f2};
  }
  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f4};
  }

  margin-bottom: 0.35em;
`;

export default PostTitle;
