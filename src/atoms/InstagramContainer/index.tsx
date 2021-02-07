import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const InstaDesktop = styled.div`
  display: none;
  ${up('md')} {
    display: block;
  }
`;

export const InstaMobile = styled.div`
  ${up('md')} {
    display: none;
  }
`;
