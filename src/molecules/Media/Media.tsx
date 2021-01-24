import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { ButtonReset } from '../../atoms/Button';
import ImgWrapper from '../../atoms/ImgWrapper';
import Paragraph from '../../atoms/Paragraph';
import PostDate from '../../atoms/PostDate';
import PostTitle from '../../atoms/PostTitle';
import { EllipsisCSS } from '../../atoms/Text';

interface MediaProps {
  description: string;
  image?: ReactNode;
  onClick?: () => void;
  publishDate: string;
  title: string;
}

const MediaContainer = styled.button`
  ${ButtonReset};

  display: flex;
  align-items: center;

  width: 100%;
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
`;

const MediaContent = styled.div`
  margin-left: ${({ theme }): string => theme.spacing.sm4};
  width: 70%;
  ${up('lg')} {
    width: 60%;
  }
`;

const MediaDescription = styled.p``;

const Media: FC<MediaProps> = ({
  description,
  image,
  onClick,
  publishDate,
  title,
}) => (
  <MediaContainer onClick={onClick}>
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
