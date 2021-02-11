import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import ImgWrapper from '../../atoms/ImgWrapper';
import PostDate from '../../atoms/PostDate';
import PostTitle from '../../atoms/PostTitle';

interface MediaProps {
  description?: string | ReactNode;
  image?: ReactNode;
  publishDate: string;
  title: string;
}

const MediaContainer = styled.article`
  display: flex;
  align-items: center;

  width: 100%;

  cursor: pointer;

  &:hover {
    > figure > div {
      transform: scale(1.1);
    }
  }
`;

const MediaFigure = styled.figure`
  width: 30%;
  max-width: 7.5rem;
  ${up('sm')} {
    max-width: 10rem;
  }
  ${up('lg')} {
    width: 40%;
    max-width: 20rem;
  }

  overflow: hidden;

  > div {
    transition: ${({ theme }): string => theme.transition};
  }
`;

const MediaContent = styled.div`
  margin-left: ${({ theme }): string => theme.spacing.sm4};
  width: 70%;
  ${up('lg')} {
    width: 60%;
  }
`;

const MediaDescription = styled.div`
  overflow: hidden;
  max-height: 46px;

  ${up('sm')} {
    max-height: 52px;
  }

  ${up('lg')} {
    max-height: 100%;
  }
`;

const Media: FC<MediaProps> = ({ description, image, publishDate, title }) => (
  <MediaContainer>
    <MediaFigure>
      <ImgWrapper ratio={1 / 1}>{image}</ImgWrapper>
    </MediaFigure>
    <MediaContent>
      <PostDate publishDate={publishDate} />
      <PostTitle>{title}</PostTitle>
      <MediaDescription>{description}</MediaDescription>
    </MediaContent>
  </MediaContainer>
);

export default Media;
