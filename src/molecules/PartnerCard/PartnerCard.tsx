import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { H5 } from '../../atoms/Headings';
import ImgWrapper from '../../atoms/ImgWrapper';
import Paragraph from '../../atoms/Paragraph';
import Text from '../../atoms/Text';

interface PartnerCardProps {
  code: string;
  description?: string;
  image: ReactNode;
  onClick: (url: string) => void;
  title: string;
  url: string;
}

const PartnerCardContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PartnerCardFigure = styled.figure`
  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm2};
`;

const PartnerCard: FC<PartnerCardProps> = ({
  code,
  description,
  image,
  onClick,
  title,
  url,
}) => (
  <PartnerCardContainer aria-label={title}>
    <ImgWrapper as={PartnerCardFigure} ratio={9 / 16}>
      {image}
    </ImgWrapper>
    <H5>{title}</H5>
    {description && <Text textAlign="center">{description}:</Text>}
    <Text
      as={Paragraph}
      fontWeight="bold"
      fontSize="f1"
      textAlign="center"
      textTransform="uppercase"
    >
      {code}
    </Text>
    <Button variant="outline" onClick={(): void => onClick(url)}>
      Shop Now
    </Button>
  </PartnerCardContainer>
);

export default PartnerCard;
