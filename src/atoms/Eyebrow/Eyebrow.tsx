import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Colors } from '../../theme/theme-types';

type Color = keyof Pick<Colors, 'white' | 'nearBlack'>;

interface EyebrowProps {
  color?: Color;
}

const Eyebrow = styled.h6<EyebrowProps>`
  color: ${({ color = 'white', theme }): string => theme.colors[color]};

  text-transform: uppercase;
  font-size: ${({ theme }): string => theme.fontSizes.f1};
  font-family: ${({ theme }): string => theme.fonts.lato};
  ${up('md')} {
    font-size: ${({ theme }): string => theme.fontSizes.f2};
  }
  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f3};
  }
`;

export default Eyebrow;
