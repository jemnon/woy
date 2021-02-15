import React, { FC } from 'react';
import styled from 'styled-components';
import { useMobileMenuContext } from '../../context/MobileMenuContextProvider';
import { hexToRGBA } from '../../utils/colors';

interface MobileMenuProps {
  isVisible: boolean;
}

const MobileMenuContainer = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z6};

  width: 100%;
  height: 100vh;

  transition: transform 0.47s ease;
  transform: ${({ isVisible }): string =>
    `translate3d(${isVisible ? '0' : '100%'}, 0, 0)`};

  backface-visibility: hidden;
`;

const MobileMenuBg = styled.div<MobileMenuProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z6};

  width: 100%;
  height: 100vh;

  background-color: ${({ theme: { colors } }): string =>
    `${hexToRGBA(colors.nearBlack, 40)}`};

  opacity: ${({ isVisible }): string => (isVisible ? '100%' : '0')};
  transition: opacity 0.47s ease;

  cursor: pointer;
`;

const MobileMenuContent = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z999};

  width: 286px;
  height: 100vh;

  background-color: ${({ theme: { colors } }): string => colors.white};

  transition: transform 0.47s ease;
  transform: ${({ isVisible }): string =>
    `translate3d(${isVisible ? '0' : '100%'}, 0, 0)`};

  backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
`;

const MobileMenu: FC<MobileMenuProps> = ({ isVisible = false }) => {
  const { close } = useMobileMenuContext();
  const handleClose = (): void => {
    close();
  };
  return (
    <MobileMenuContainer isVisible={isVisible}>
      <MobileMenuContent isVisible={isVisible} />
      <MobileMenuBg role="button" isVisible={isVisible} onClick={handleClose} />
    </MobileMenuContainer>
  );
};

export default MobileMenu;
