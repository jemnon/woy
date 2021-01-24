import styled from 'styled-components';
import { Spacing } from '../../types/theme';

type Display = 'inline-block' | 'inline' | 'inline-flex';
type BottomSpacing = keyof Spacing;

interface AvatarProps {
  display?: Display;
  bottomSpacing?: BottomSpacing;
}

const Avatar = styled.img<AvatarProps>`
  display: ${({ display = 'inline-block' }): string => display};

  width: 8.125rem;
  height: 8.125rem;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ bottomSpacing = 'md1', theme }): string =>
    theme.spacing[bottomSpacing]};

  border-radius: 100%;

  background-color: ${({ theme }): string => theme.colors.nearWhite};
`;

export default Avatar;
