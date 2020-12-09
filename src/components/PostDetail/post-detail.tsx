import React, { FC } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import Img from 'gatsby-image';
import ImageWrapper from '../Styles/image-wrapper-styled';
import LinkStyles from '../Styles/link-styled';
import { Post as PostDetailProps } from '../../types/post';
import { Headline } from '../Styles/headings-styled';

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
  a {
    ${LinkStyles};
  }
`;

const PostDetailBody = styled.div`
  flex: 1;

  line-height: 1.5;
  letter-spacing: 0.5px;

  ${up('md')} {
    max-width: 64rem;
  }

  ul {
    padding-left: 2rem;
    margin-bottom: 1rem;
    list-style-type: disc;
  }

  ol {
    padding-left: 2rem;
    margin-bottom: 1rem;
    li {
      margin-bottom: 1rem;
    }
  }

  strong {
    display: block;
  }

  a {
    ${LinkStyles};
  }
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
  publishDate,
  images,
  title,
  body,
  bodyShort,
}) => {
  const date = new Date(publishDate);
  const [{ fluid }] = images;
  return (
    <article>
      <PostDetailColumns>
        <PostDetailHeader>
          <time dateTime={publishDate}>
            {date.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            })}
          </time>
          <Headline bottomSpacing="1rem" title={title}>
            {title}
          </Headline>
          {bodyShort?.childMarkdownRemark?.html && (
            <div
              dangerouslySetInnerHTML={{
                __html: bodyShort?.childMarkdownRemark?.html,
              }}
            />
          )}
        </PostDetailHeader>
        <ImageWrapper>
          <Img alt={title} fluid={fluid} />
        </ImageWrapper>
      </PostDetailColumns>
      {body?.childMarkdownRemark?.html && (
        <PostDetailBody
          dangerouslySetInnerHTML={{
            __html: body?.childMarkdownRemark?.html,
          }}
        />
      )}
    </article>
  );
};

export default PostDetail;
