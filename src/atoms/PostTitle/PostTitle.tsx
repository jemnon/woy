import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { EllipsisCSS } from '../Text';

const PostTitle = styled.h2`
  ${EllipsisCSS};

  font-family: ${({ theme }): string => theme.fonts.lato};
  font-weight: bold;
  font-size: ${({ theme }): string => theme.fontSizes.f1};
  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes.f2};
  }
  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f4};
  }

  margin-bottom: 0.35em;
`;

export default PostTitle;
