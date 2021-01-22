import styled, { css } from 'styled-components';
import { Colors } from '../../types/theme';

type ColorScheme = keyof Pick<Colors, 'orange' | 'teal' | 'nearBlack'>;
type Shape = 'pill' | 'rectangle';
type Size = 'small' | 'medium';
type Variant = 'solid' | 'outline';

interface ButtonProps {
  colorScheme?: ColorScheme;
  isDisabled?: boolean;
  isLoading?: boolean;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
}

export const ButtonReset = css`
  padding: 0;
  border-style: none;
  border-width: 0;
  outline: 0;
  background-color: transparent;
`;

const Button = styled.button<ButtonProps>`
  ${ButtonReset};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${({ size = 'medium', theme }): string => {
    if (size === 'small') {
      return `${theme.spacing.sm2} ${theme.spacing.md4}`;
    }
    return `${theme.spacing.sm3} ${theme.spacing.lg4}`;
  }};

  font-size: ${({ size = 'medium', theme }): string =>
    size === 'small' ? '0.75rem' : theme.fontSizes.f1};
  font-weight: bold;
  letter-spacing: normal;
  text-decoration: none;

  border-radius: ${({ shape = 'rounded' }): string =>
    shape === 'rectangle' ? '0' : '5rem'};
  border-width: ${({ variant = 'solid' }): string =>
    variant === 'outline' ? '1px' : ''};
  border-style: solid;
  border-color: ${({ colorScheme = 'orange', theme }): string =>
    theme.colors[colorScheme]};

  background-color: ${({
    colorScheme = 'orange',
    theme,
    variant = 'solid',
  }): string =>
    variant === 'outline' ? 'transparent' : theme.colors[colorScheme]};
  color: ${({ colorScheme = 'orange', theme, variant = 'solid' }): string =>
    variant === 'outline' ? theme.colors[colorScheme] : theme.colors.white};

  overflow: hidden;
  cursor: ${({ isDisabled, isLoading }): string =>
    isDisabled || isLoading ? 'not-allowed' : 'pointer'};
  transition: ${({ theme }): string => theme?.transition ?? ''};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${({ isDisabled = false, isLoading = false }): string =>
    isDisabled || isLoading ? 'opacity: 50%;' : ''};

  &:disabled {
    transform: none;
    cursor: not-allowed;
  }
  &:hover {
    ${({ colorScheme = 'orange', theme, variant = 'solid' }): string =>
      variant === 'outline'
        ? `border-color: ${theme.hoverColors[colorScheme]}; color: ${theme.hoverColors[colorScheme]}`
        : `background-color: ${theme.hoverColors[colorScheme]}`};
  }
  &:active {
    box-shadow: ${({ isDisabled }): string =>
      !isDisabled ? 'rgba(0, 119, 187, 0.5) 0px 0px 0px 3px' : ''};
  }
  & + & {
    margin-left: ${({ theme }): string => theme.spacing.sm4};
  }
`;

export default Button;
