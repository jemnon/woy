import styled, { css } from 'styled-components';

type Color = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  color?: Color;
  isInverted?: boolean;
}

const colorMap: { [key: string]: string } = {
  primary: 'orange',
  secondary: 'teal',
  tertiary: 'nearBlack',
};

const BaseButton = css<ButtonProps>`
  display: inline-block;
  border-radius: 20px;
  padding: 0.5rem 2.25rem;

  outline: none;
  cursor: pointer;

  font-family: ${({ theme }): string => theme.fonts.latoBold};
  font-weight: 600;
  font-size: 1rem;
  text-align: center;

  background-color: ${({ color, isInverted, theme }): string => {
    if (isInverted) {
      return theme.colors.white;
    }
    return theme.colors[colorMap[color || 'primary']];
  }};
  border: 1px solid
    ${({ color, isInverted, theme }): string => {
      if (isInverted) {
        return theme.colors[colorMap[color || 'primary']];
      }
      return theme.colors.white;
    }};
  color: ${({ color, isInverted, theme }): string => {
    if (isInverted) {
      return theme.colors[colorMap[color || 'primary']];
    }
    return theme.colors.white;
  }};

  opacity: 1;
  transition: ${({ theme }): string => theme.transition};

  &:hover {
    opacity: 0.5;
  }
`;

export const Button = styled.button<ButtonProps>`
  ${BaseButton}
`;

export const ButtonLink = styled.a<ButtonProps>`
  text-decoration: none;
  ${BaseButton}
`;

export default Button;
