import React, { FC } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import Link from '../../atoms/Link';
import { EllipsisCSS } from '../../atoms/Text';

const BreadcrumbsContainer = styled.ul`
  display: inline-grid;
  grid-gap: 0.5rem;
  grid-template-columns: auto auto auto;

  padding-right: ${({ theme }): string => theme.spacing.sm4};

  font-size: ${({ theme }): string => theme.fontSizes['f-sm']};
  ${up('md')} {
    font-size: ${({ theme }): string => theme.fontSizes.f1};
  }
  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f2};
  }
`;

const BreadcrumbsLink = styled.a`
  display: inline-block;

  color: ${({ theme }): string => theme.colors.nearBlack};

  text-decoration: none;
`;

const BreadcrumbsTitle = styled.span`
  ${EllipsisCSS}

  text-transform: capitalize;

  color: ${({ theme }): string => theme.colors.orange};
`;

interface BreadcrumbsProps {
  title?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title }) => {
  return (
    <BreadcrumbsContainer>
      <li>
        <BreadcrumbsLink as={Link} to="/">
          Home
        </BreadcrumbsLink>
      </li>
      <li>/</li>
      {title && (
        <li>
          <BreadcrumbsTitle>{title}</BreadcrumbsTitle>
        </li>
      )}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
