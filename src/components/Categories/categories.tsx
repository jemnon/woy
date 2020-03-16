import React, { FC, useEffect, useRef, useState, MouseEvent } from 'react';
import { globalHistory } from '@reach/router';
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

interface CategoriesStickyProps {
  isSticky: boolean;
  w?: number | null;
}

interface CategoriesCoordinatesState {
  left: number;
  top: number;
  width: number;
}

const CategoriesSticky = styled.div<CategoriesStickyProps>`
  position: ${({ isSticky }): string => (isSticky ? 'fixed' : 'static')};
`;

const Categories: FC<CategoriesProps> = ({ categories }) => {
  const target = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [hasIntersected, isIntersecting] = useIntersectionObserver(target);
  const [
    coordinates,
    setCoordinates,
  ] = useState<CategoriesCoordinatesState | null>(null);
  const { pathname } = globalHistory.location || {};
  useEffect(() => {
    const { current } = target || {};
    const setCoordinatesState = (): void => {
      if (current) {
        const { offsetLeft: left, offsetWidth: width } = current;
        setCoordinates({ left, top: 96, width });
      }
    };
    const handleResize = (): void => {
      setCoordinatesState();
    };
    const handleScroll = (): void => {
      if (pathname === '/') {
        if (current) {
          const { offsetTop } = current;
          const windowY = window.pageYOffset;
          const waypoint = offsetTop - 96;
          if (windowY >= waypoint) {
            setCoordinatesState();
            setIsScrolling(true);
          }
          if (windowY < waypoint) {
            setIsScrolling(false);
          }
        }
      } else {
        setCoordinatesState();
        setIsScrolling(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [coordinates, isIntersecting, target]);
  return (
    <CategoriesContainer ref={target}>
      <CategoriesSticky isSticky={isScrolling} style={{ ...coordinates }}>
        <CategoriesHeader>
          <H2>Categories</H2>
          <HR marginBottom="1rem" />
        </CategoriesHeader>
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
      </CategoriesSticky>
    </CategoriesContainer>
  );
};

export default Categories;
