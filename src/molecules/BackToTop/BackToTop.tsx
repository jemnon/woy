import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { TriangleUp } from '../../atoms/Icons';

interface BackToTopProps {
  top?: number;
}

const BackToTopLabel = styled.span`
  padding-right: ${({ theme }): string => theme.spacing.sm2};
`;

const BackToTopContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const BackToTop: FC<BackToTopProps> = ({ top = 0 }) => {
  const handleClick = (): void => {
    window.scrollTo({ top, left: 0, behavior: 'smooth' });
  };
  return (
    <BackToTopContainer>
      <Button onClick={handleClick} variant="outline">
        <BackToTopLabel>Back to top</BackToTopLabel>
        <TriangleUp fontSize="0.75rem" fill="#BB5B34" />
      </Button>
    </BackToTopContainer>
  );
};

export default BackToTop;
