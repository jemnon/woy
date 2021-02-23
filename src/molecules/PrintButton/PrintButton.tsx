import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { Print } from '../../atoms/Icons';

interface PrintButtonProps {
  onClick?: () => void;
  width?: string;
}

const PrintButtonContainer = styled.div<Pick<PrintButtonProps, 'width'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: ${({ width = 'auto' }): string => width};
`;
const PrintButtonLabel = styled.span`
  padding-right: ${({ theme }): string => theme.spacing.sm2};
`;

const PrintButton: FC<PrintButtonProps> = ({ onClick, width }) => (
  <PrintButtonContainer width={width}>
    <Button
      onClick={onClick}
      variant="outline"
      shape="rectangle"
      size="small"
      width={width}
    >
      <PrintButtonLabel>Print Recipe</PrintButtonLabel>
      <Print fontSize="0.75rem" fill="#BB5B34" style={{ marginTop: '2px' }} />
    </Button>
  </PrintButtonContainer>
);

export default PrintButton;
