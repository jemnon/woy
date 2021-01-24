import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Eyebrow from '../../atoms/Eyebrow';
import { H1 } from '../../atoms/Headings';

interface HeroContentProps {
  title: string;
  onClick?: () => void;
}

const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroContent: FC<HeroContentProps> = ({ title, onClick }) => (
  <HeroContentContainer>
    <Eyebrow>Newest Post</Eyebrow>
    <H1 color="white">{title}</H1>
    <Button onClick={onClick}>View Recipe</Button>
  </HeroContentContainer>
);

export default HeroContent;
