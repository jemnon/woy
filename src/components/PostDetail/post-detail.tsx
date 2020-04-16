import React, { FC, ReactNode } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Post } from '../../types/post';
import { H1 } from '../headings-styled';

type PostDetailProps = Post;

const PostDetailHeader = styled.header`
  margin-bottom: 1rem;
  > span {
    color: ${({ theme }): string => theme.colors.orange};
  }
  time {
    display: block;
    margin-bottom: 1rem;
    text-transform: capitalize;
    > span {
      padding: 0 0.25rem;
    }
  }
  p {
    margin-bottom: 1rem;
  }
  strong {
    display: block;
  }
`;

const PostDetailBody = styled.div`
  line-height: 1.5;
  letter-spacing: 0.5px;
  ul {
    padding-left: 2rem;
    margin-bottom: 1rem;
    list-style-type: disc;
  }
  ol {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  strong {
    display: block;
  }
`;

const PostDetailImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostDetailLink = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }): string => theme.colors.orange};
`;

const PostDetailColumns = styled.section`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-areas: 'title image';
    grid-template-columns: 45% 1fr;
    header {
      grid-area: title;
    }
    div {
      grid-area: image;
    }
  }
`;

const PostDetail: FC<PostDetailProps> = ({
  categories,
  publishDate,
  images,
  title,
  body,
  bodyPreview,
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
    if (bodyPreview?.childMarkdownRemark?.html) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: bodyPreview?.childMarkdownRemark?.html,
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
      {!body ? (
        <>
          <PostDetailHeader>
            <time dateTime={publishDate}>
              {date.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
              })}
            </time>
            <H1 title={title} whiteSpace="nowrap">
              {title}
            </H1>
          </PostDetailHeader>
          <PostDetailImage>
            <Img alt={title} fluid={fluid} />
          </PostDetailImage>
        </>
      ) : (
        <PostDetailColumns>
          <PostDetailHeader>
            <time dateTime={publishDate}>
              {date.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
              })}
            </time>
            <H1 bottomSpacing="1rem" title={title}>
              {title}
            </H1>
            {bodyShort?.childMarkdownRemark?.html && (
              <div
                dangerouslySetInnerHTML={{
                  __html: bodyShort?.childMarkdownRemark?.html,
                }}
              />
            )}
          </PostDetailHeader>
          <PostDetailImage>
            <Img fluid={fluid} />
          </PostDetailImage>
        </PostDetailColumns>
      )}
      <PostDetailBody>{renderPostDetail()}</PostDetailBody>
      {!body ? (
        <PostDetailLink>
          <span>read more</span>
        </PostDetailLink>
      ) : null}
    </article>
  );
};

export default PostDetail;
