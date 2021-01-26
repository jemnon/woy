import React, { FC } from 'react';
import styled, { css, SimpleInterpolation } from 'styled-components';
import Button from '../../atoms/Button';
import Eyebrow from '../../atoms/Eyebrow';
import { H1 } from '../../atoms/Headings';

interface HeroContentProps {
  isCentered?: boolean;
  onClick?: () => void;
  title: string;
}

const CenteredCSS = css`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const HeroContentContainer = styled.div<{ isCentered?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ isCentered = false }): SimpleInterpolation =>
    isCentered && `${CenteredCSS}`};
`;

const HeroContent: FC<HeroContentProps> = ({ isCentered, title, onClick }) => (
  <HeroContentContainer isCentered={isCentered}>
    <Eyebrow>Newest Post</Eyebrow>
    <H1 color="white">{title}</H1>
    <Button onClick={onClick}>View Recipe</Button>
  </HeroContentContainer>
);

export default HeroContent;
