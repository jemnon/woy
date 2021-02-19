import React, { FC, ReactNode } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';

interface ScrollerProps {
  columnWidth?: string;
  children: ReactNode;
}

const ScrollerContainer = styled.section`
  overflow: hidden;
`;

const ScrollerContent = styled.div<{ columnWidth?: string }>`
  display: grid;
  grid-gap: ${({ theme: { spacing } }): string => spacing.sm4};
  grid-auto-flow: column;
  ${({ columnWidth = '47%' }): SimpleInterpolation => {
    return `grid-auto-columns: calc(${columnWidth} - (1rem) * 2);`;
  }}

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Scroller: FC<ScrollerProps> = ({ children, columnWidth }) => (
  <ScrollerContainer>
    <ScrollerContent columnWidth={columnWidth}>{children}</ScrollerContent>
  </ScrollerContainer>
);

export default Scroller;
