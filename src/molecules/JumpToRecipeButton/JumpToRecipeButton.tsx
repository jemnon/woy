import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { TriangleDown } from '../../atoms/Icons';

interface JumpToRecipeButtonProps {
  onClick?: () => void;
}

const JumpToRecipeButtonContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const JumpToRecipeButtonLabel = styled.span`
  padding-right: ${({ theme }): string => theme.spacing.sm2};
`;

const JumpToRecipeButton: FC<JumpToRecipeButtonProps> = ({ onClick }) => (
  <JumpToRecipeButtonContainer>
    <Button onClick={onClick} variant="outline" shape="rectangle" size="small">
      <JumpToRecipeButtonLabel>Jump to Recipe</JumpToRecipeButtonLabel>
      <TriangleDown
        fontSize="0.75rem"
        fill="#BB5B34"
        style={{ marginTop: '2px' }}
      />
    </Button>
  </JumpToRecipeButtonContainer>
);

export default JumpToRecipeButton;
