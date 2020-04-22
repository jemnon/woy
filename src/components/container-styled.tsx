import styled from 'styled-components';

interface ContainerProps {
  topSpacing?: string;
  bottomSpacing?: string;
}

const Container = styled.main<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  width: 100%;
  max-width: 30rem;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    max-width: 64rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: ${({ bottomSpacing }): string => bottomSpacing || '3rem'};
    padding-top: ${({ topSpacing }): string => topSpacing || '3rem'};
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
