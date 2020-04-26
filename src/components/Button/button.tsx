import styled from 'styled-components';

interface ButtonProps {
  borderColor: string;
  color: string;
  isDisabled: boolean;
  textColor: string;
  type: string;
}

const Button = styled.button<ButtonProps>`
  border: 1px solid
    ${({ theme, borderColor }): string => theme.colors[borderColor]};
  outline: none;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    padding: 0.75rem 1.25rem;
  }
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: ${({ theme, textColor }): string => theme.colors[textColor]};
  background-color: ${({ theme, color }): string => theme.colors[color]};
  grid-area: button;
  opacity: ${({ isDisabled }): string => (isDisabled ? '0.45' : '1')};
  cursor: ${({ isDisabled }): string =>
    isDisabled ? 'not-allowed' : 'pointer'};
  transition: 0.3s ease opacity;
  &:hover {
    opacity: 0.75;
  }
  &:focus {
    opacity: 0.55;
  }
`;

export default Button;
