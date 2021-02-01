import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import ImgWrapper from '../../atoms/ImgWrapper';
import Paragraph from '../../atoms/Paragraph';
import PostDate from '../../atoms/PostDate';
import PostTitle from '../../atoms/PostTitle';
import { EllipsisCSS } from '../../atoms/Text';

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
  max-width: 28rem;
`;

const Media: FC<MediaProps> = ({ description, image, publishDate, title }) => (
  <MediaContainer>
    <MediaFigure>
      <ImgWrapper>{image}</ImgWrapper>
    </MediaFigure>
    <MediaContent>
      <PostDate publishDate={publishDate} />
      <PostTitle>{title}</PostTitle>
      <MediaDescription as={Paragraph}>{description}</MediaDescription>
    </MediaContent>
  </MediaContainer>
);

export default Media;
