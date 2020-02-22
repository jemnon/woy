import React, { FC } from 'react';
import styled from 'styled-components';
import { Categories as CategoriesType } from '../../types/categories';
import { HR } from '../container-styled';
import { H2 } from '../headings-styled';

interface CategoriesProps {
  categories?: CategoriesType[];
}

const CategoriesContainer = styled.section`
  width: 100%;
`;

const CategoriesHeader = styled.header`
  margin-bottom: 1rem;
`;

const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <CategoriesContainer>
      <CategoriesHeader>
        <H2>Categories</H2>
        <HR />
      </CategoriesHeader>
    </CategoriesContainer>
  );
};

export default Categories;
