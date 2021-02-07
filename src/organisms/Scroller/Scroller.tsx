import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ScrollerProps {
  children: ReactNode;
}

const ScrollerContainer = styled.section`
  overflow: hidden;
`;

const ScrollerContent = styled.div`
  display: grid;
  grid-gap: ${({ theme: { spacing } }): string => spacing.sm4};
  grid-auto-flow: column;
  grid-auto-columns: calc(47% - (16px) * 2);

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Scroller: FC<ScrollerProps> = ({ children }) => (
  <ScrollerContainer>
    <ScrollerContent>{children}</ScrollerContent>
  </ScrollerContainer>
);

export default Scroller;
