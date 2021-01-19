import React, { FC } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

interface PostDateProps {
  publishDate: string;
}

const PostDateTime = styled.time`
  font-weight: bold;
  font-size: 0.75rem;
  ${up('md')} {
    font-size: 0.875rem;
  }
  text-transform: uppercase;

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
