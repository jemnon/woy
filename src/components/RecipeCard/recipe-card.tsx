import React, { FC } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Headline } from '../Styles/headings-styled';
import { Post as RecipeCardProps } from '../../types/post';

const RecipeCardArticle = styled.article`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const RecipeCardHeader = styled.header`
  margin-bottom: 1rem;
`;

const RecipeCardTime = styled.time`
  display: block;
  margin-bottom: 1rem;
  text-transform: capitalize;
  > span {
    padding: 0 0.25rem;
  }
`;

const RecipeCardCTA = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }): string => theme.colors.nearBlack};

  span {
    padding-bottom: 0.25rem;
    border-bottom: 2px solid ${({ theme }): string => theme.colors.orange};
  }
`;

const RecipeCardBody = styled.div`
  flex: 1;

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
    li {
      margin-bottom: 1rem;
    }
  }

  strong {
    display: block;
  }
`;

const RecipeCardFigure = styled.figure`
  position: relative;
  width: 100%;

  margin-bottom: ${({ theme }): string => theme.spacing.s4};
  padding-bottom: 100%;

  border-radius: 2px;
  overflow: hidden;
`;

const RecipeCardImg = styled.div`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RecipeCard: FC<RecipeCardProps> = ({
  publishDate,
  images,
  title,
  bodyPreview,
}) => {
  const date = new Date(publishDate);
  const [{ fluid }] = images;
  return (
    <RecipeCardArticle>
      <RecipeCardHeader>
        <RecipeCardTime dateTime={publishDate}>
          {date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
          })}
        </RecipeCardTime>
        <Headline title={title} bottomSpacing="0" whiteSpace="nowrap">
          {title}
        </Headline>
      </RecipeCardHeader>
      <RecipeCardFigure data-id="recipe-card-figure">
        <RecipeCardImg as={Img} alt={title} fluid={fluid} />
      </RecipeCardFigure>
      {bodyPreview?.childMarkdownRemark?.html && (
        <RecipeCardBody
          dangerouslySetInnerHTML={{
            __html: bodyPreview?.childMarkdownRemark?.html,
          }}
        />
      )}
      <RecipeCardCTA>
        <span>View Recipe</span>
      </RecipeCardCTA>
    </RecipeCardArticle>
  );
};

export default RecipeCard;
