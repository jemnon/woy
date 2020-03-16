import styled from 'styled-components';

const H1 = styled.h1`
  position: relative;
  font-family: ${({ theme }): string => theme.fonts.noto};
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 3rem;
    margin-bottom: 2rem;
    padding-left: 2rem;
  }
  font-size: 2rem;
  text-transform: capitalize;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 1rem;
  padding-left: 1rem;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 4px;
    height: 80%;
    transform: translateY(-50%);
    background-color: ${({ theme }): string => theme.colors.orange};
  }
`;

const H2 = styled.h2`
  font-family: ${({ theme }): string => theme.fonts.noto};
  font-size: 1.5rem;
  text-transform: capitalize;
  line-height: 1;
  margin: 0;
  margin-bottom: 2rem;
`;
export { H1, H2 };
