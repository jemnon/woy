import React, { FC } from 'react';
import styled from 'styled-components';
import Link from '../Link';

const BreadcrumbsContainer = styled.ul`
  display: inline-grid;
  grid-gap: 0.5rem;
  grid-template-columns: auto auto auto;
  margin-bottom: 1rem;
`;

const BreadcrumbsLink = styled.a`
  display: inline-block;
  color: ${({ theme }): string => theme.colors.nearBlack};
  text-decoration: none;
`;

const BreadcrumbsTitle = styled.li`
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
      {title && <BreadcrumbsTitle>{title}</BreadcrumbsTitle>}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
