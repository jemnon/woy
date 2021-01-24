import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { TriangleUp } from '../../atoms/Icons';

interface BackToTopProps {
  onClick?: () => void;
}

const BackToTopLabel = styled.span`
  padding-right: ${({ theme }): string => theme.spacing.sm2};
`;

const BackToTop: FC<BackToTopProps> = ({ onClick }) => (
  <Button onClick={onClick} variant="outline">
    <BackToTopLabel>Back to top</BackToTopLabel>
    <TriangleUp fontSize="0.75rem" fill="#BB5B34" />
  </Button>
);

export default BackToTop;
