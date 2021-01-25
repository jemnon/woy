import React, { FC } from 'react';
import styled from 'styled-components';
import { DownArrowThick } from '../Icons';
import { ButtonReset } from '../Button';

interface DownButtonProps {
  onClick?: () => void;
}

const DownButtonContainer = styled.button`
  ${ButtonReset};

  cursor: pointer;
`;

const DownButton: FC<DownButtonProps> = ({ onClick }) => (
  <DownButtonContainer onClick={onClick}>
    <DownArrowThick fontSize="2.25rem" fill="#fff" />
  </DownButtonContainer>
);

export default DownButton;
