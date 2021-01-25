import styled from 'styled-components';

const TextField = styled.input`
  font-family: ${({ theme }): string => theme.fonts.lato};
  font-size: ${({ theme }): string => theme.fontSizes.f1};

  width: 100%;

  padding: ${({ theme }): string => theme.spacing.sm4};

  background-color: ${({ theme }): string => theme.colors.white};
  border: 1px solid ${({ theme }): string => theme.colors.nearBlack};
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
`;

export default TextField;
