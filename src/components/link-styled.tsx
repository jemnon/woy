import { css } from 'styled-components';

const LinkStyles = css`
  font-style: italic;
  color: ${({ theme }): string => theme.colors.orange};
  transition: ${({ theme }): string => theme.transition};
  text-decoration: none;
  &:hover {
    color: ${({ theme }): string => theme.colors.nearBlack};
  }
`;

export default LinkStyles;
