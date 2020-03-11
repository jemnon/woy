import React, { FC, ReactNode } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Post } from '../../types/post';
import { H1 } from '../headings-styled';

type PostDetailProps = Post;

const PostDetailHeader = styled.header`
  font-family: ${({ theme }): string => theme.fonts.noto};
  margin-bottom: 1rem;
  > span {
    color: ${({ theme }): string => theme.colors.orange};
  }
  time {
    text-transform: capitalize;
    font-style: italic;
    > span {
      padding: 0 0.25rem;
    }
  }
`;

const PostDetailBody = styled.div`
  /* @media ${({ theme }): string => theme.breakpoints.desktop} {
    margin-bottom: 2rem;
  }
  margin-bottom: 1rem; */
  line-height: 1.5;
  letter-spacing: 0.5px;
  ul {
    padding-left: 2rem;
    list-style-type: disc;
  }
  ol {
    padding-left: 2rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

const PostDetailImage = styled.div`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    margin-bottom: 2rem;
  }
  margin-bottom: 1rem;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

const PostDetailLink = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }): string => theme.colors.orange};
  margin-bottom: 1rem;
`;

const PostDetail: FC<PostDetailProps> = ({
  categories,
  publishDate,
  images,
  title,
  body,
  bodyShort,
}) => {
  const date = new Date(publishDate);
  const [{ fluid }] = images;
  const cats: Array<string> = [];
  const renderPostDetail = (): ReactNode | null => {
    if (body?.childMarkdownRemark?.html) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: body?.childMarkdownRemark?.html }}
        />
      );
    }
    if (bodyShort?.childMarkdownRemark?.html) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: bodyShort?.childMarkdownRemark?.html,
          }}
        />
      );
    }
    return null;
  };
  if (categories) {
    categories.forEach(category => {
      cats.push(category?.name);
    });
  }
  return (
    <article>
      <PostDetailHeader>
        <time dateTime={publishDate}>
          {date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
          <span>&ndash;</span>
        </time>
        <span>{cats.join()}</span>
      </PostDetailHeader>
      <H1>{title}</H1>
      <PostDetailImage>
        <Img fluid={fluid} />
      </PostDetailImage>
      <PostDetailBody>{renderPostDetail()}</PostDetailBody>
      {bodyShort && (
        <PostDetailLink>
          <span>read more</span>
        </PostDetailLink>
      )}
    </article>
  );
};

export default PostDetail;
