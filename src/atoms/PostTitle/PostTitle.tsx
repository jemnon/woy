import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

interface PostTitleProps {
  children: ReactNode;
}

const BasePostTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: ${({ theme }): string => theme.fonts.lato};
  font-weight: bold;
  font-size: ${({ theme }): string => theme.fontSizes.f1};

  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes.f2};
  }
  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f4};
  }

  margin-bottom: 0.25em;
`;

const PostTitle: FC<PostTitleProps> = ({ children }) => (
  <BasePostTitle>{children}</BasePostTitle>
);

export default PostTitle;
