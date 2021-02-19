import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { Colors, Spacing } from '../../types/theme';

type Color = keyof Pick<Colors, 'white' | 'nearBlack'>;
type BottomSpacing = keyof Spacing;

interface HeadingProps {
  color?: Color;
  bottomSpacing?: BottomSpacing | string;
}

export const sharedCSS = css<HeadingProps>`
  font-weight: 900;
  font-family: ${({ theme }): string => theme.fonts.noto};

  color: ${({ color = 'nearBlack', theme }): string => theme.colors[color]};

  margin-bottom: ${({ bottomSpacing = '0.35em' }): string => bottomSpacing};
`;

export const H1 = styled.h1<HeadingProps>`
  ${sharedCSS};

  font-size: ${({ theme }): string => theme.fontSizes.f10};

  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes.f11};
  }

  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f13};
  }
`;

export const H2 = styled.h2<HeadingProps>`
  ${sharedCSS};

  font-size: ${({ theme }): string => theme.fontSizes.f9};

  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes.f10};
  }

  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f12};
  }
`;

export const H3 = styled.h3<HeadingProps>`
  ${sharedCSS};

  font-size: ${({ theme }): string => theme.fontSizes.f8};

  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes.f9};
  }

  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f11};
  }
`;

export const H4 = styled.h4<HeadingProps>`
  ${sharedCSS};

  font-size: ${({ theme }): string => theme.fontSizes.f7};

  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes.f8};
  }

  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f10};
  }
`;

export const H5 = styled.h5<HeadingProps>`
  ${sharedCSS};

  font-size: ${({ theme }): string => theme.fontSizes.f6};

  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes.f7};
  }

  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f9};
  }
`;

export const H6 = styled.h6<HeadingProps>`
  ${sharedCSS};

  font-size: ${({ theme }): string => theme.fontSizes.f5};

  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes.f6};
  }

  ${up('lg')} {
    font-size: ${({ theme }): string => theme.fontSizes.f8};
  }
`;
