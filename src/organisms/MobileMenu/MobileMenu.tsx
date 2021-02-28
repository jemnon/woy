import React, { FC } from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { ButtonReset } from '../../atoms/Button';
import CloseButton from '../../atoms/CloseButton';
import { useMobileMenuContext } from '../../context/MobileMenuContextProvider';
import { hexToRGBA } from '../../utils/colors';

interface MobileMenuProps {
  isVisible: boolean;
}

const MobileMenuContainer = styled.div`
  display: block;
  ${up('md')} {
    display: none;
  }

  position: fixed;
  top: 0;
  right: 0;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z6};

  width: 0;
  height: 0;
`;

const MobileMenuBg = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z997};

  width: 100%;
  height: 100vh;

  background-color: ${({ theme: { colors } }): string =>
    `${hexToRGBA(colors.nearBlack, 40)}`};

  opacity: ${({ isVisible }): string => (isVisible ? '100%' : '0')};
  transition: opacity 0.47s ease;

  transform: ${({ isVisible }): string =>
    `translate3d(${isVisible ? '0' : '100%'}, 0, 0)`};

  cursor: pointer;
`;

const MobileMenuContent = styled.div<MobileMenuProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z998};

  width: 240px;
  height: 100vh;

  background-color: ${({ theme: { colors } }): string => colors.nearWhite};

  transition: transform 0.47s ease;
  transform: ${({ isVisible }): string =>
    `translate3d(${isVisible ? '0' : '100%'}, 0, 0)`};

  backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
`;

const MobileMenuContentHeader = styled.header`
  display: flex;
  justify-content: flex-end;

  padding: ${({ theme: { spacing } }): string => spacing.sm4};
  padding-bottom: 0;
`;

const MobileMenuNav = styled.nav``;

const MobileMenuButtonCSS = css<{ isActive?: boolean }>`
  display: block;

  width: 100%;
  padding-top: ${({ theme: { spacing } }): string => spacing.sm2};
  padding-bottom: ${({ theme: { spacing } }): string => spacing.sm2};
  padding-left: ${({ theme: { spacing } }): string => spacing.sm4};
  padding-right: ${({ theme: { spacing } }): string => spacing.sm4};

  color: ${({ isActive, theme: { colors } }): string =>
    isActive ? colors.orange : colors.nearBlack};

  font-family: ${({ theme }): string => theme.fonts.lato};
  font-size: ${({ theme }): string => theme.fontSizes['f-xsm']};
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;

  cursor: pointer;
`;

const MobileMenuButton = styled.button<{ isActive?: boolean }>`
  ${ButtonReset};
  ${MobileMenuButtonCSS};
`;

const MobileMenuLink = styled.a`
  ${MobileMenuButtonCSS};
`;

const MobileMenu: FC<MobileMenuProps> = ({ isVisible = false }) => {
  const location = useLocation();
  const { close } = useMobileMenuContext();
  const handleClick = (pathname: string): void => {
    close();
    navigate(`${pathname}`);
  };
  const handleClose = (): void => {
    close();
  };
  return (
    <MobileMenuContainer>
      <MobileMenuContent role="dialog" isVisible={isVisible}>
        <MobileMenuContentHeader>
          <CloseButton colorTheme="light" onClick={handleClose} />
        </MobileMenuContentHeader>
        <MobileMenuNav>
          <MobileMenuButton
            isActive={location.pathname === '/'}
            onClick={(): void => handleClick('/')}
          >
            Home
          </MobileMenuButton>
          <MobileMenuButton
            isActive={location.pathname.includes('posts')}
            onClick={(): void => handleClick('/posts/1')}
          >
            Recipes
          </MobileMenuButton>
          <MobileMenuButton
            isActive={location.pathname === '/about'}
            onClick={(): void => handleClick('/about')}
          >
            About
          </MobileMenuButton>{' '}
          <MobileMenuLink href="mailto:whisperofyum@gmail.com" target="_top">
            Contact
          </MobileMenuLink>
        </MobileMenuNav>
      </MobileMenuContent>
      <MobileMenuBg role="button" isVisible={isVisible} onClick={handleClose} />
    </MobileMenuContainer>
  );
};

export default MobileMenu;
