import styled, { css } from 'styled-components';
import { hexToRGBA } from '../../utils/colors';
import { Colors } from '../../types/theme';

type BorderColor = keyof Colors;

interface TextFieldProps {
  borderColor?: BorderColor;
}

const InputCSS = css<TextFieldProps>`
  font-family: ${({ theme }): string => theme.fonts.lato};
  font-size: ${({ theme }): string => theme.fontSizes.f1};

  width: 100%;

  padding: ${({ theme }): string => theme.spacing.sm4};

  background-color: ${({ theme }): string => theme.colors.white};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ borderColor = 'nearBlack', theme: { colors } }): string =>
    colors[borderColor]};
  border-radius: 0.25rem;

  transition: box-shadow 0.15s ease;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus {
    outline: none;
    box-shadow: ${({ theme }): string =>
      `${theme.focusColors.blue} 0px 0px 0px 3px`};
  }

  &::placeholder {
    color: ${({ theme: { colors } }): string =>
      `${hexToRGBA(colors.nearBlack, 50)}`};
  }
`;

const TextField = styled.input<TextFieldProps>`
  ${InputCSS};
`;

export const TextArea = styled.textarea<TextFieldProps>`
  ${InputCSS};
  min-height: 200px;
`;

export default TextField;
