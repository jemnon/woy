import React, { FC } from 'react';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { DownArrowThick } from '../Icons';
import { ButtonReset } from '../Button';

interface DownButtonProps {
  isCentered?: boolean;
  onClick?: () => void;
}

const CenteredCSS = css`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  z-index: 1;
`;

const DownButtonContainer = styled.button<{ isCentered?: boolean }>`
  ${ButtonReset};
  ${({ isCentered = false }): SimpleInterpolation =>
    isCentered && `${CenteredCSS}`};

  cursor: pointer;
`;

const DownButton: FC<DownButtonProps> = ({ isCentered, onClick }) => (
  <DownButtonContainer onClick={onClick} isCentered={isCentered}>
    <DownArrowThick fontSize="2.25rem" fill="#fff" />
  </DownButtonContainer>
);

export default DownButton;
