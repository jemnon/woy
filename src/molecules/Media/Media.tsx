import React, { FC } from 'react';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';
import { ButtonReset } from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';
import PostDate from '../../atoms/PostDate';
import PostTitle from '../../atoms/PostTitle';

interface MediaProps {
  description: string;
  image?: {
    fluid: FluidObject;
  };
  onClick?: () => void;
  publishDate: string;
  title: string;
}

const MediaContainer = styled.button`
  ${ButtonReset};

  display: flex;
  align-items: center;
`;

const MediaContent = styled.div`
  margin-left: ${({ theme }): string => theme.spacing.sm4};
`;

const Media: FC<MediaProps> = ({
  description,
  image,
  onClick,
  publishDate,
  title,
}) => (
  <MediaContainer onClick={onClick}>
    {image && <Img fluid={image.fluid} />}
    <MediaContent>
      <PostDate publishDate={publishDate} />
      <PostTitle>{title}</PostTitle>
      <Paragraph>{description}</Paragraph>
    </MediaContent>
  </MediaContainer>
);

export default Media;
