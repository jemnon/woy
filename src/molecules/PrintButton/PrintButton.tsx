import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { Print } from '../../atoms/Icons';
import { Colors } from '../../types/theme';

type ColorScheme = keyof Pick<Colors, 'orange' | 'nearBlack'>;

interface PrintButtonProps {
  colorScheme?: ColorScheme;
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
  padding-right: ${({ theme }): string => theme.spacing.sm1};
`;

const PrintButton: FC<PrintButtonProps> = ({
  colorScheme = 'orange',
  onClick,
  width,
}) => (
  <PrintButtonContainer width={width}>
    <Button
      colorScheme={colorScheme}
      onClick={onClick}
      variant="outline"
      shape="rectangle"
      size="small"
      width={width}
    >
      <PrintButtonLabel>Print Recipe</PrintButtonLabel>
      <Print
        fontSize="0.75rem"
        fill={colorScheme === 'nearBlack' ? '#111' : '#BB5B34'}
        style={{ marginTop: '2px' }}
      />
    </Button>
  </PrintButtonContainer>
);

export default PrintButton;
