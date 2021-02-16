import styled from 'styled-components';
import { Colors } from '../../types/theme';

type BorderColor = keyof Colors;

interface TextFieldProps {
  borderColor?: BorderColor;
}

const TextField = styled.input<TextFieldProps>`
  font-family: ${({ theme }): string => theme.fonts.lato};
  font-size: ${({ theme }): string => theme.fontSizes.f1};

  width: 100%;

  padding: ${({ theme }): string => theme.spacing.sm4};

  background-color: ${({ theme }): string => theme.colors.white};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ borderColor = 'nearBlack', theme: { colors } }): string =>
    colors[borderColor]};
  border-radius: 0;

  transition: ${({ theme }): string => theme.transition};

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus {
    outline: none;
    box-shadow: ${({ theme }): string =>
      `${theme.focusColors.blue} 0px 0px 0px 3px`};
  }

  ::placeholder {
    color: ${({ theme: { colors } }): string => colors.nearBlack};
  }
`;

export default TextField;
