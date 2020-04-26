import styled from 'styled-components';

interface ButtonProps {
  color: string;
  isDisabled: boolean;
  textColor: string;
  type: string;
}

const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.25rem;
  border: none;
  outline: none;
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: ${({ theme, textColor }): string => theme.colors[textColor]};
  border-radius: 2rem;
  background-color: ${({ theme, color }): string => theme.colors[color]};
  grid-area: button;
  opacity: ${({ isDisabled }): string => (isDisabled ? '0.5' : '1')};
  cursor: ${({ isDisabled }): string =>
    isDisabled ? 'not-allowed' : 'pointer'};
  transition: 0.3s ease opacity;
  &:hover {
    opacity: 0.85;
  }
  &:focus {
    opacity: 0.75;
  }
`;

export default Button;
