import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${({ theme }): string => theme.fonts.noto};
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 3rem;
  }
  font-size: 2rem;
  text-transform: lowercase;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 2rem;
`;

const H2 = styled.h2`
  font-family: ${({ theme }): string => theme.fonts.noto};
  font-size: 1.5rem;
  text-transform: lowercase;
  line-height: 1;
  margin: 0;
  margin-bottom: 1rem;
`;
export { H1, H2 };
