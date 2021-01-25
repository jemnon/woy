import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ButtonReset } from '../../atoms/Button';
import ImgWrapper from '../../atoms/ImgWrapper';
import PostDate from '../../atoms/PostDate';
import PostTitle from '../../atoms/PostTitle';

interface CardProps {
  image?: ReactNode;
  onClick?: () => void;
  publishDate: string;
  title: string;
}

const CardContainer = styled.button`
  ${ButtonReset};

  display: block;

  width: 100%;

  cursor: pointer;

  &:hover {
    > figure > div {
      transform: scale(1.1);
    }
  }
`;

const CardFigure = styled.figure`
  overflow: hidden;

  margin-bottom: ${({ theme }): string => theme.spacing.sm3};

  > div {
    transition: ${({ theme }): string => theme.transition};
  }
`;

const Card: FC<CardProps> = ({ image, onClick, publishDate, title }) => (
  <CardContainer aria-label={title} onClick={onClick}>
    <CardFigure>
      <ImgWrapper>{image}</ImgWrapper>
    </CardFigure>
    <PostDate publishDate={publishDate} />
    <PostTitle>{title}</PostTitle>
  </CardContainer>
);

export default Card;
