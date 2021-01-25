import React, { FC } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

interface RecipeMetaProps {
  cookTime: string;
  servings: string;
}

const RecipeMetaContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  font-family: ${({ theme }): string => theme.fonts.lato};
  font-size: ${({ theme }): string => theme.fontSizes.f1};
  font-weight: bold;

  width: 100%;

  color: ${({ theme }): string => theme.colors.nearBlack};
  background-color: ${({ theme }): string => theme.colors.nearWhite};
  border-left: 4px solid ${({ theme }): string => theme.colors.orange};

  padding: ${({ theme }): string => theme.spacing.sm4};
  margin-bottom: ${({ theme }): string => theme.spacing.sm4};
  ${up('sm')} {
    margin-bottom: ${({ theme }): string => theme.spacing.md4};
  }
`;

const RecipeMeta: FC<RecipeMetaProps> = ({ cookTime, servings }) => (
  <RecipeMetaContainer>
    <span>Total Time: {cookTime}</span>
    <span>Servings: {servings}</span>
  </RecipeMetaContainer>
);

export default RecipeMeta;
