import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { ButtonReset } from '../../atoms/Button';
import {
  Easing,
  CarouselButtonProps,
  CarouselContentProps,
  CarouselDotProps,
} from './carousel-types';

export const CarouselContainer = styled.section<{ carouselWidth?: string }>`
  position: relative;
  width: ${({ carouselWidth: width = '100%' }): string => width};
`;

export const CarouselContent = styled.div<CarouselContentProps>`
  display: flex;

  position: relative;
  z-index: 1;

  width: ${({ w: width }): string => `${width}px`};
  height: 100%;

  transition: all 0.25s ${({ easing = 'ease-in-out' }): Easing => easing};
  transform: ${({ xPos = 0 }): string => `translate3d(${xPos}px, 0, 0)`};
`;

export const CarouselBody = styled.div`
  position: relative;
  z-index: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const CarouselNav = styled.nav`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  & + * {
    margin-top: ${({ theme: { spacing } }): string => spacing.sm4};
  }
`;

export const CarouselList = styled.ul`
  display: flex;
  align-items: center;
`;

export const CarouselListItem = styled.li`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;

export const CarouselDot = styled.button<CarouselDotProps>`
  ${ButtonReset};

  border-radius: 100%;
  width: 0.5rem;
  height: 0.5rem;

  cursor: pointer;

  background-color: ${({ isCurrent }): string =>
    `rgba(255, 255, 255, ${isCurrent ? '100' : '0.5'})`};
`;

export const CarouselButton = styled.button<CarouselButtonProps>`
  ${ButtonReset};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  ${({ direction = 'left' }): string =>
    direction === 'left' ? `left: 0.75rem` : `right: 0.75rem`};

  width: 2rem;
  height: 2rem;

  ${up('md')} {
    width: 3rem;
    height: 3rem;
  }

  background-color: rgba(0, 0, 0, 0.4);

  opacity: ${({ isDisabled }): string => (isDisabled ? '0.30' : '100%')};
  cursor: ${({ isDisabled }): string =>
    isDisabled ? 'not-allowed' : 'pointer'};
  border-radius: 100%;
`;

export const CarouselControls = styled.section`
  position: absolute;
  bottom: ${({ theme: { spacing } }): string => spacing.sm4};
  left: 50%;
  transform: translateX(-50%);

  padding-left: ${({ theme: { spacing } }): string => spacing.md4};
  padding-right: ${({ theme: { spacing } }): string => spacing.md4};
`;
