import { css } from 'styled-components';

const LinkStyles = css`
  color: ${({ theme }): string => theme.colors.orange};
  transition: ${({ theme }): string => theme.transition};
  &:hover {
    color: ${({ theme }): string => theme.colors.nearBlack};
  }
`;

export default LinkStyles;
