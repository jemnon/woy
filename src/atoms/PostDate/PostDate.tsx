import React, { FC } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

interface PostDateProps {
  publishDate: string;
}

const PostDateTime = styled.time`
  display: block;

  font-family: ${({ theme }): string => theme.fonts.lato};
  font-weight: bold;
  font-size: 0.75rem;
  ${up('sm')} {
    font-size: 0.875rem;
  }
  line-height: 1.5;
  text-transform: uppercase;

  margin-bottom: 0.35em;

  color: ${({ theme }): string => theme.colors.gray};
`;

const PostDate: FC<PostDateProps> = ({ publishDate }) => {
  const date = new Date(publishDate);
  return (
    <PostDateTime dateTime={publishDate}>
      {date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
      })}
    </PostDateTime>
  );
};

export default PostDate;
