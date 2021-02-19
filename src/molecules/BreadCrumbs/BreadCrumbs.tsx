import React, { FC } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
import { up } from 'styled-breakpoints';
import { ButtonReset } from '../../atoms/Button';
import { EllipsisCSS } from '../../atoms/Text';

const BreadCrumbsContainer = styled.ul`
  display: flex;
  align-items: center;

  font-size: ${({ theme }): string => theme.fontSizes['f-sm']};
  ${up('md')} {
    font-size: ${({ theme }): string => theme.fontSizes.f1};
  }
  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f2};
  }
`;

const BreadCrumbsLink = styled.button`
  ${ButtonReset};

  display: inline-block;

  cursor: pointer;

  color: ${({ theme }): string => theme.colors.nearBlack};
  font-size: ${({ theme }): string => theme.fontSizes['f-sm']};
  ${up('md')} {
    font-size: ${({ theme }): string => theme.fontSizes.f1};
  }
  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f2};
  }
  text-decoration: none;
`;

const BreadCrumbsTitle = styled.span`
  ${EllipsisCSS};
  text-transform: capitalize;

  color: ${({ theme }): string => theme.colors.orange};
`;

const BreadCrumbsListItem = styled.li<{
  hasEllipsis?: boolean;
  hasSpacing?: boolean;
}>`
  padding-left: ${({ hasSpacing, theme: { spacing } }): string =>
    hasSpacing ? spacing.sm1 : '0'};
  padding-right: ${({ hasSpacing, theme: { spacing } }): string =>
    hasSpacing ? spacing.sm1 : '0'};

  ${({ hasEllipsis }): SimpleInterpolation => hasEllipsis && `${EllipsisCSS}`};
`;

interface BreadCrumbsProps {
  onClick?: () => void;
  title?: string;
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ title, onClick }) => {
  return (
    <BreadCrumbsContainer>
      <li>
        <BreadCrumbsLink onClick={onClick}>Home</BreadCrumbsLink>
      </li>
      <BreadCrumbsListItem hasSpacing>/</BreadCrumbsListItem>
      {title && (
        <BreadCrumbsListItem hasEllipsis>
          <BreadCrumbsTitle>{title}</BreadCrumbsTitle>
        </BreadCrumbsListItem>
      )}
    </BreadCrumbsContainer>
  );
};

export default BreadCrumbs;
