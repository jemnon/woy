import styled from 'styled-components';

interface ContainerProps {
  maxWidth?: string;
}

const Container = styled.main<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 1rem 2rem;
  width: 100%;
  max-width: 30rem;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    max-width: ${({ maxWidth }): string => maxWidth || '64rem'};
    padding: 2rem 1rem 4rem;
  }
`;

export const Content = styled.ul`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, auto));
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
`;

interface HRProps {
  marginBottom?: string;
  borderStyle?: string;
}

export const HR = styled.hr<HRProps>`
  border: none;
  border-top: 1px dotted ${({ theme }): string => theme.colors.orange};
  margin-top: 0;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    margin-bottom: ${({ marginBottom }): string =>
      marginBottom ? marginBottom : '2rem'};
  }
  margin-bottom: ${({ marginBottom }): string =>
    marginBottom ? marginBottom : '1rem'};
`;

export default Container;
