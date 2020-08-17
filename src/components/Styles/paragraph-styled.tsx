import styled from 'styled-components';
import { BottomSpacing } from './spacing-styled';
import { ParagraphProps } from '../../types/styles';

export const P = styled.p<ParagraphProps>`
  font-family: ${({ theme }): string => theme.fonts.lato};
  text-align: ${({ textAlign }): string => textAlign || 'left'};

  ${BottomSpacing};

  & > p {
    margin-bottom: 0;
  }
`;

export default P;
