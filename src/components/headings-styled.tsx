import styled from 'styled-components';

interface H1Props {
  bottomSpacing?: string | undefined;
}

const H1 = styled.h1<H1Props>`
  position: relative;
  font-family: ${({ theme }): string => theme.fonts.noto};
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 2.5rem;
    padding-left: 1.5rem;
  }
  font-size: 1.5rem;
  text-transform: capitalize;
  white-space: ${({ bottomSpacing }): string =>
    bottomSpacing ? 'normal' : 'nowrap'};
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  margin: 0;
  margin-bottom: ${({ bottomSpacing }): string => bottomSpacing || ''};
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
  margin-bottom: 1.5rem;
`;
export { H1, H2 };
