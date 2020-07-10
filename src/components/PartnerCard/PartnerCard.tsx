import React, { FC } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import { Button } from '../Styles';
import Link from '../Link';

interface PartnerCardProps {
  description: {
    childMarkdownRemark: {
      html: string;
    };
  };
  image: { fluid: FluidObject };
  linkText?: string;
  linkUrl?: string;
  partnerName: string;
  promoCode?: string;
}

const PartnerCardArticle = styled.article`
  width: 100%;
`;

const PartnerCardFigure = styled.figure`
  margin-bottom: ${({ theme }): string => theme.spacing.m};
`;

const PartnerCardTitle = styled.h3`
  font-size: 1.3125rem;
  font-family: ${({ theme }): string => theme.fonts.latoBold};
  font-weight: 700;
  text-align: center;

  margin-bottom: ${({ theme }): string => theme.spacing.m};
`;

const PartnerCardDescription = styled.p`
  font-size: 1rem;
  text-align: center;

  &,
  & > p {
    margin-bottom: 0;
  }

  & + div {
    font-size: 1rem;
    margin-bottom: ${({ theme }): string => theme.spacing.m};
  }
`;

const PartnerCardPromoCode = styled.div`
  font-family: ${({ theme }): string => theme.fonts.latoBold};
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  margin-bottom: ${({ theme }): string => theme.spacing.m};
`;

const PartnerCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PartnerCard: FC<PartnerCardProps> = ({
  description,
  image,
  linkText,
  linkUrl,
  partnerName,
  promoCode,
}) => {
  return (
    <PartnerCardArticle>
      <PartnerCardFigure>
        <Img alt={partnerName} fluid={image.fluid} />
      </PartnerCardFigure>
      <PartnerCardContent>
        <PartnerCardTitle>{partnerName}</PartnerCardTitle>
        <PartnerCardDescription
          dangerouslySetInnerHTML={{
            __html: description?.childMarkdownRemark?.html,
          }}
        />
        <PartnerCardPromoCode>{promoCode}</PartnerCardPromoCode>
        <Button>{linkText}</Button>
      </PartnerCardContent>
    </PartnerCardArticle>
  );
};

export default PartnerCard;
