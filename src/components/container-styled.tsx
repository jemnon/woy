import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: grid;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    grid-gap: 1rem;
    grid-template-areas: 'content content sidebar';
    grid-template-columns: 1fr 1fr 1fr;
  }
  grid-template-areas: 'content' 'sidebar';
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  padding-top: 2rem;
  max-width: 1440px;
  width: 100%;
`;

export const ContainerContent = styled.section`
  grid-area: content;
`;

export const ContainerSideBar = styled.aside`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    display: block;
  }
  display: none;
  grid-area: sidebar;
`;

export default ContainerStyled;
