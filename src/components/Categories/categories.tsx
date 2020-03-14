import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from '../Link';
import { Categories as CategoriesType } from '../../types/categories';
import { HR } from '../container-styled';
import { H2 } from '../headings-styled';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface CategoriesProps {
  categories?: CategoriesType[];
}

const CategoriesContainer = styled.section`
  width: 100%;
`;

const CategoriesHeader = styled.header`
  margin-bottom: 1rem;
`;

const CategoriesListItem = styled.li`
  margin-bottom: 1rem;
`;

const CategoriesLink = styled.div`
  a {
    display: inline-block;
    padding-bottom: 0.25rem;
    border-bottom: 1px dotted ${({ theme }): string => theme.colors.nearBlack};
    text-decoration: none;
    color: ${({ theme }): string => theme.colors.nearBlack};
  }
`;

const Categories: FC<CategoriesProps> = ({ categories }) => {
  const target = useRef<HTMLDivElement | null>(null);
  const [hasIntersected, isIntersecting] = useIntersectionObserver(target);
  useEffect(() => {
    // console.log(hasIntersected);
    console.log('isIntersecting: ', isIntersecting);
  }, [hasIntersected, isIntersecting]);
  return (
    <CategoriesContainer ref={target}>
      <CategoriesHeader>
        <H2>Categories</H2>
        <HR marginBottom="1rem" />
        {categories && (
          <ul>
            {categories.map(cat => {
              if (!cat.posts) return null;
              return (
                <CategoriesListItem key={`category-${cat.name}`}>
                  <CategoriesLink>
                    <Link to={`/categories/${cat.name}`}>
                      {cat.name} ({cat.posts.length})
                    </Link>
                  </CategoriesLink>
                </CategoriesListItem>
              );
            })}
          </ul>
        )}
      </CategoriesHeader>
    </CategoriesContainer>
  );
};

export default Categories;
