import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { TriangleDown } from '../../atoms/Icons';

interface JumpToRecipeButtonProps {
  onClick?: () => void;
  width?: string;
}

const JumpToRecipeButtonContainer = styled.div<
  Pick<JumpToRecipeButtonProps, 'width'>
>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: ${({ width = 'auto' }): string => width};
`;

const JumpToRecipeButtonLabel = styled.span`
  padding-right: ${({ theme }): string => theme.spacing.sm2};
`;

const JumpToRecipeButton: FC<JumpToRecipeButtonProps> = ({
  onClick,
  width,
}) => (
  <JumpToRecipeButtonContainer width={width}>
    <Button
      onClick={onClick}
      variant="outline"
      shape="rectangle"
      size="small"
      width={width}
    >
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
