import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { Pinterest } from '../../atoms/Icons';

interface PinButtonProps {}

const PinButtonContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const PinButtonLabel = styled.span`
  padding-right: ${({ theme }): string => theme.spacing.sm2};
`;

const PinButton: FC<PinButtonProps> = () => (
  <PinButtonContainer>
    <Button variant="outline" shape="rectangle" size="small">
      <PinButtonLabel>Pin It</PinButtonLabel>
      <Pinterest
        fontSize="0.85rem"
        fill="#BB5B34"
        style={{ marginTop: '2px' }}
      />
    </Button>
  </PinButtonContainer>
);

export default PinButton;
