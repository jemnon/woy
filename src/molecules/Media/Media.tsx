import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { down, up } from 'styled-breakpoints';
import ImgWrapper from '../../atoms/ImgWrapper';
import PostDate from '../../atoms/PostDate';
import PostTitle from '../../atoms/PostTitle';
import { EllipsisCSS } from '../../atoms/Text';

interface MediaProps {
  description?: string | ReactNode;
  image?: ReactNode | any;
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
  width: 7.5rem;
  ${up('sm')} {
    width: 30%;
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
  width: calc(100% - 136px);
  ${up('sm')} {
    width: 60%;
  }
`;

const MediaDescription = styled.div`
  overflow: hidden;
  max-height: 52px;

  ${up('md')} {
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
